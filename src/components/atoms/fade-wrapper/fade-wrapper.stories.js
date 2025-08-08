"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullScreenFade = exports.CustomAnimation = exports.Standard = void 0;
var react_1 = require("react");
var _1 = require(".");
var button_1 = require("../../fundamentals/button");
var focus_modal_1 = require("../../molecules/modal/focus-modal");
exports.default = {
    title: "Atoms/Fade",
    component: _1.default,
};
var Template = function (args) {
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    return (<div>
      <button_1.default size="small" variant="primary" onClick={function () { return setOpen(!open); }}>
        Fade
      </button_1.default>
      <_1.default start={args.start} end={args.end} isVisible={open} isFullScreen={!!args.isFullScreen}>
        {args.children}
      </_1.default>
    </div>);
};
exports.Standard = Template.bind({});
exports.Standard.args = {
    children: (<div className="mt-24">
      <h1 className="inter-xlarge-semibold mb-8">Title</h1>
      <span className="inter-base-semibold mb-4">Subtitle</span>
    </div>),
};
exports.CustomAnimation = Template.bind({});
exports.CustomAnimation.args = {
    start: "translate-x-full",
    end: "translate-x-0",
    children: (<div className="mt-24">
      <h1 className="inter-xlarge-semibold mb-8">Title</h1>
      <span className="inter-base-semibold mb-4">Subtitle</span>
    </div>),
};
exports.FullScreenFade = Template.bind({});
exports.FullScreenFade.args = {
    isFullScreen: true,
    children: (<focus_modal_1.default>
      <focus_modal_1.default.Header>
        <h1>Testing</h1>
      </focus_modal_1.default.Header>
      <focus_modal_1.default.Main>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(function (i) { return (<span className="inter-base-regular">{i}</span>); })}
      </focus_modal_1.default.Main>
    </focus_modal_1.default>),
};
