"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var discord_icon_1 = require("../../fundamentals/icons/discord-icon");
var input_1 = require("../../molecules/input");
var textarea_1 = require("../../molecules/textarea");
var RadixDropdown = require("@radix-ui/react-popover");
var emoji_picker_react_1 = require("emoji-picker-react");
var happy_icon_1 = require("../../fundamentals/icons/happy-icon");
var MailDialog = function (_a) {
    var onDismiss = _a.onDismiss;
    var _b = (0, react_1.useState)(""), subject = _b[0], setSubject = _b[1];
    var _c = (0, react_1.useState)(""), body = _c[0], setBody = _c[1];
    var _d = (0, react_1.useState)(0), bodySelectionStart = _d[0], setBodySelectionStart = _d[1];
    var _e = (0, react_1.useState)("mailto:support@medusajs.com"), link = _e[0], setLink = _e[1];
    var ref = react_1.default.useRef(null);
    var _f = react_1.default.useState(false), showEmojiPicker = _f[0], setShowEmojiPicker = _f[1];
    react_1.default.useEffect(function () {
        setLink("mailto:support@medusajs.com?subject=".concat(encodeURI(subject), "&body=").concat(encodeURI(body)));
    }, [subject, body]);
    (0, react_1.useEffect)(function () {
        console.log(showEmojiPicker);
    }, [showEmojiPicker]);
    react_1.default.useEffect(function () {
        var handleClickOutside = function (event) {
            if (ref.current &&
                !ref.current.contains(event.target) &&
                !showEmojiPicker) {
                onDismiss && onDismiss();
            }
        };
        document.addEventListener("click", handleClickOutside, true);
        return function () {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, [onDismiss, showEmojiPicker]);
    var handleAddEmoji = function (e) {
        setBody("".concat(body.slice(0, bodySelectionStart)).concat(e, " ").concat(body.slice(bodySelectionStart)));
    };
    return (<div ref={ref} className="bg-grey-0 w-[400px] shadow-dropdown rounded-rounded p-8 top-[64px] bottom-2 right-3 rounded overflow-x-hidden fixed flex flex-col justify-between">
      <div>
        <h1 className="inter-xlarge-semibold mb-1">How can we help?</h1>
        <h2 className="inter-small-regular text-grey-50 mb-6">
          We usually respond in a few hours
        </h2>
        <input_1.default label={"Subject"} value={subject} className="mb-4" placeholder="What is it about?..." onChange={function (e) { return setSubject(e.target.value); }}/>
        <textarea_1.default label={"How can we help?"} placeholder="Write a message..." value={body} onSelect={function (e) { var _a; return setBodySelectionStart(((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.selectionStart) || 0); }} onChange={function (e) {
            setBody(e.target.value);
        }} rows={8}>
          <EmojiPicker isOpen={showEmojiPicker} onChange={setShowEmojiPicker} onEmojiClick={handleAddEmoji}/>
        </textarea_1.default>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-grey-40 mb-3">
          <a href="https://discord.gg/medusajs">
            <discord_icon_1.default size={24}/>
          </a>
        </span>
        <span className="inter-small-regular w-full text-center text-grey-40">
          Feel free to join a community of
        </span>
        <span className="inter-small-regular w-full text-center text-grey-40 mb-7">
          merchants and e-commerce developers
        </span>
        <a className="w-full" href={link}>
          <button_1.default variant="primary" size="large" className="w-full">
            Send a message
          </button_1.default>
        </a>
      </div>
    </div>);
};
var EmojiPicker = function (_a) {
    var isOpen = _a.isOpen, onChange = _a.onChange, onEmojiClick = _a.onEmojiClick;
    return (<RadixDropdown.Root open={isOpen} onOpenChange={function (val) { return onChange(val); }}>
      <RadixDropdown.Trigger>
        <button_1.default variant="ghost" size="small" className="focus:border-none focus:shadow-none text-grey-40 hover:text-violet-60 p-0 h-5 w-5">
          <happy_icon_1.default size={20}/>
        </button_1.default>
      </RadixDropdown.Trigger>

      <RadixDropdown.Content sideOffset={5} className="border bg-grey-0 border-grey-20 -translate-x-1/2 rounded-rounded shadow-dropdown min-w-[200px] z-[100]">
        <emoji_picker_react_1.default onEmojiClick={function (e, data) {
            onEmojiClick(data.emoji);
        }} disableAutoFocus={true} skinTone={emoji_picker_react_1.SKIN_TONE_NEUTRAL} native disableSkinTonePicker={true} searchPlaceholder={"Search Emoji..."} groupNames={{
            smileys_people: "Smileys & People",
            animals_nature: "Animals & Nature",
            food_drink: "Food & Drink",
            travel_places: "Travel & Places",
            activities: "Activities",
            objects: "Objects",
            symbols: "Symbols",
            flags: "Flags",
            recently_used: "Recently Used",
        }}/>
      </RadixDropdown.Content>
    </RadixDropdown.Root>);
};
exports.default = MailDialog;
