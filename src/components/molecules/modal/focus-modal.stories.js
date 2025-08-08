"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicFocusModalOverflow = exports.BasicFocusModal = exports.Overflow = exports.Standard = void 0;
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var input_1 = require("../input");
var focus_modal_1 = require("./focus-modal");
exports.default = {
    title: "Molecules/FocusModal",
    component: focus_modal_1.default,
};
var Template = function (args) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    return (<div>
      {open && (<focus_modal_1.default>
          <focus_modal_1.default.Header>
            <span>Test header</span>
            <span onClick={function () { return setOpen(false); }}>Click to close</span>
          </focus_modal_1.default.Header>
          <focus_modal_1.default.Main>{args.children}</focus_modal_1.default.Main>
        </focus_modal_1.default>)}
      <button_1.default size="small" variant="primary" onClick={function () { return setOpen(true); }}>
        Open Modal
      </button_1.default>
    </div>);
};
var BasicTemplate = function (args) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    return (<div>
      {open && (<focus_modal_1.default.BasicFocusModal onSubmit={function () { return setOpen(false); }} handleClose={function () { return setOpen(false); }}>
          {args.children}
        </focus_modal_1.default.BasicFocusModal>)}
      <button_1.default size="small" variant="primary" onClick={function () { return setOpen(true); }}>
        Open Modal
      </button_1.default>
    </div>);
};
var Block = function (_a) {
    var children = _a.children;
    return (<div className="w-full h-[100px] my-4 bg-grey-10 rounded-rounded">
    {children}
  </div>);
};
exports.Standard = Template.bind({});
exports.Standard.args = {
    children: (<div className="mt-24">
      <h1 className="inter-xlarge-semibold mb-8">Title</h1>
      <span className="inter-base-semibold mb-4">Subtitle</span>
      <input_1.default label={"Input label"}/>
    </div>),
};
exports.Overflow = Template.bind({});
exports.Overflow.args = {
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return (<Block>
      <span className="inter-base-regular">{i}</span>
    </Block>); }),
};
exports.BasicFocusModal = BasicTemplate.bind({});
exports.BasicFocusModal.args = {
    children: (<div className="mt-24">
      <h1 className="inter-xlarge-semibold mb-8">Title</h1>
      <span className="inter-base-semibold mb-4">Subtitle</span>
      <input_1.default label={"Input label"}/>
    </div>),
};
exports.BasicFocusModalOverflow = BasicTemplate.bind({});
exports.BasicFocusModalOverflow.args = {
    children: [1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return (<Block>
      <span className="inter-base-regular">{i}</span>
    </Block>); }),
};
