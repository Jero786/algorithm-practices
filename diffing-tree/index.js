import get from 'lodash/get';

/**
 * Given a types and attributes create a new Node.
 * @param type
 * @param attributes
 * @returns {{type: string, props: {[p: number]: *, some<T>(callbackfn: <T>(value: *, index: number, array: *[]) => unknown, thisArg?: any): boolean, keys(): IterableIterator<number>, shift(): (* | undefined), values(): IterableIterator<*>, pop(): (* | undefined), slice(start?: number, end?: number): *[], find: {<S extends *>(predicate: <T>(this:void, value: *, index: number, obj: *[]) => value is S, thisArg?: any): (S | undefined); <T>(predicate: <T>(value: *, index: number, obj: *[]) => unknown, thisArg?: any): (* | undefined)}, flat: {<U>(this:U[][][][][][][][], depth: 7): U[], <U>(this:U[][][][][][][], depth: 6): U[], <U>(this:U[][][][][][], depth: 5): U[], <U>(this:U[][][][][], depth: 4): U[], <U>(this:U[][][][], depth: 3): U[], <U>(this:U[][][], depth: 2): U[], <U>(this:U[][], depth?: 1): U[], <U>(this:U[], depth: 0): U[], <U>(depth?: number): any[], <U>(this:U[][][][][][][][], depth: 7): U[], <U>(this:U[][][][][][][], depth: 6): U[], <U>(this:U[][][][][][], depth: 5): U[], <U>(this:U[][][][][], depth: 4): U[], <U>(this:U[][][][], depth: 3): U[], <U>(this:U[][][], depth: 2): U[], <U>(this:U[][], depth?: 1): U[], <U>(this:U[], depth: 0): U[], <U>(depth?: number): any[]}, join(separator?: string): string, reduceRight: {<T>(callbackfn: <T>(previousValue: *, currentValue: *, currentIndex: number, array: *[]) => *): *; <T>(callbackfn: <T>(previousValue: *, currentValue: *, currentIndex: number, array: *[]) => *, initialValue: *): *; <U>(callbackfn: <T>(previousValue: U, currentValue: *, currentIndex: number, array: *[]) => U, initialValue: U): U}, copyWithin(target: number, start: number, end?: number): this, indexOf<T>(searchElement: *, fromIndex?: number): number, every<T>(callbackfn: <T>(value: *, index: number, array: *[]) => unknown, thisArg?: any): boolean, map<U>(callbackfn: <T>(value: *, index: number, array: *[]) => U, thisArg?: any): U[], reduce: {<T>(callbackfn: <T>(previousValue: *, currentValue: *, currentIndex: number, array: *[]) => *): *; <T>(callbackfn: <T>(previousValue: *, currentValue: *, currentIndex: number, array: *[]) => *, initialValue: *): *; <U>(callbackfn: <T>(previousValue: U, currentValue: *, currentIndex: number, array: *[]) => U, initialValue: U): U}, splice: {(start: number, deleteCount?: number): *[]; <T>(start: number, deleteCount: number, ...items: *[]): *[]}, forEach<T>(callbackfn: <T>(value: *, index: number, array: *[]) => void, thisArg?: any): void, [Symbol.iterator](): IterableIterator<*>, length: number, includes<T>(searchElement: *, fromIndex?: number): boolean, concat: {<T>(...items: ConcatArray<*>): *[]; <T>(...items: ConcatArray<*> | *[]): *[]}, sort<T>(compareFn?: <T>(a: *, b: *) => number): this, fill<T>(value: *, start?: number, end?: number): this, reverse(): *[], push<T>(...items: *[]): number, [Symbol.unscopables](): {copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean}, findIndex<T>(predicate: <T>(value: *, index: number, obj: *[]) => unknown, thisArg?: any): number, flatMap: {<U, This=undefined>(callback: <T>(this:This, value: *, index: number, array: *[]) => (ReadonlyArray<U> | U), thisArg?: This): U[], <U, This=undefined>(callback: <T>(this:This, value: *, index: number, array: *[]) => (ReadonlyArray<U> | U), thisArg?: This): U[]}, filter: {<S extends *>(callbackfn: <T>(value: *, index: number, array: *[]) => value is S, thisArg?: any): S[]; <T>(callbackfn: <T>(value: *, index: number, array: *[]) => unknown, thisArg?: any): *[]}, lastIndexOf<T>(searchElement: *, fromIndex?: number): number, entries(): IterableIterator<[number, *]>, toString(): string, unshift<T>(...items: *[]): number, toLocaleString(): string}}}
 */
function createNode(type = 'node', ...attributes) {
  const Node = {
    type,
    props: {
      ...attributes
    }
  };
  return Node;
}

function getMinDifferences({originalNode, latestNode}) {
  
  const workingProgressTree = getWorkingProgressTree(originalNode, latestNode)
  
  return {
    type: 'parent',
    props: {
      children: [
        {type: 'child-different'}
      ]
    }
  };
}

function getWorkingProgressTree(originalNode, latestNode, diffTree = {}) {
  if (isSameTypeNode(originalNode, latestNode)) {
    // check their attributes, we will keep the same reference
    if (hasChildren(originalNode)) {
      for(const child of originalNode) {
          const getLatestChildNode = getChildNode(child, latestNode);
          getWorkingProgressTree(child, getLatestChildNode, diffTree);
      }
    } else {
      // no children, is the leaf
      // Get diff and set
      diffTree.type = latestNode.type;
      diffTree.name = latestNode.name;
    }
  } else {
    // stop transverse the tree, replace from here.
    diffTree.type = latestNode.type;
    diffTree.props.children = latestNode.props.children;
  }
}

function getChildNode(child, latestNode) {
  if (child.key === undefined) {
    return getChildNodeOnCubicWay(child, latestNode);
  } else {
    return getChildNodeLinearlyWay(child.key, latestNode);
  }
}

function getChildNodeLinearlyWay(childKey, node) {
  // O(n)
  if (hasChildren(node)) {
    return node.props.children.find(node => node.key === childKey);
  }
}

function getChildNodeOnCubicWay(child, latestNode) {
  // Check each child node by their type, by attributes and by their values.
  // and then check attribute by attribute to know if the node exist.
  // O(n3)
}

function hasChildren(node) {
  return get(node, 'props.children.length', 0) === 0;
}

function hasSameAttributes(originalNode, latestNode) {
  const originalNodeAttributes = Array.from(originalNode);
  const latestNodeAttributes = Array.from(latestNode);
  
  if (originalNodeAttributes.length !== latestNodeAttributes.length) return false;
  const result =  originalNodeAttributes.every((value, index) => latestNodeAttributes.indexOf(value) > -1);
  return result;
}

function isSameTypeNode(originalNode, latestNode) {
  return originalNode.type === latestNode.type;
}


function applyChanges({orginalNode, nodeWithChanges}) {

}


module.exports = {
  createNode,
  getMinDifferences
};

