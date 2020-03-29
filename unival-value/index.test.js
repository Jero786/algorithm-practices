var _this = this;
var createUnivalNode = function (_a) {
    var value = _a.value, _b = _a.children, children = _b === void 0 ? [] : _b;
    return ({
        children: children,
        value: value,
        hasChildren: function () {
            debugger;
            console.log('RESULT ' + (_this.children.length > 0));
            return _this.children.length > 0;
        }
    });
};
test('Unival tree', function () {
    var nodeOne = createUnivalNode({ value: '1' });
    var nodeTwoChildOne = createUnivalNode({ value: '1' });
    var nodeTwoChildTwo = createUnivalNode({ value: '1' });
    var nodeTwo = createUnivalNode({ value: '1', children: [nodeTwoChildOne, nodeTwoChildTwo] });
    expect(nodeTwo.hasChildren()).toBeTruthy();
});
