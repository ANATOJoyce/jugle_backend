"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var send_icon_1 = require("../../fundamentals/icons/send-icon");
var emoji_picker_1 = require("../emoji-picker");
var NoteInput = function (_a) {
    var onSubmit = _a.onSubmit;
    var _b = (0, react_1.useState)(undefined), note = _b[0], setNote = _b[1];
    var inputRef = (0, react_1.useRef)(null);
    var handleAddEmoji = function (emoji) {
        setNote("".concat(note ? note : "").concat(emoji));
    };
    var handleSubmit = function () {
        if (onSubmit && note) {
            onSubmit(note);
            setNote("");
        }
    };
    var onKeyDownHandler = (0, react_1.useCallback)(function (event) {
        var _a, _b;
        switch (event.key) {
            case "Enter":
                event.preventDefault();
                event.stopPropagation();
                handleSubmit();
                (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
                break;
            case "Esc":
            case "Escape":
                (_b = inputRef.current) === null || _b === void 0 ? void 0 : _b.blur();
                break;
            default:
                break;
        }
    }, [note, setNote, onSubmit]);
    return (<form>
      <div className="flex items-center py-xsmall px-small bg-grey-5 border border-grey-20 rounded-rounded" onClick={function () { var _a; return (_a = inputRef.current) === null || _a === void 0 ? void 0 : _a.focus(); }}>
        <div className="flex items-center gap-x-small flex-grow">
          <emoji_picker_1.default onEmojiClick={handleAddEmoji}/>
          <input type="text" placeholder="Write a note..." value={note} onChange={function (e) { return setNote(e.target.value); }} className="flex-grow bg-transparent inter-base-regular placeholder:text-grey-40 focus:outline-none" ref={inputRef} id="note-input" autoComplete="off" onKeyDown={onKeyDownHandler}/>
        </div>
        <button className="text-grey-30 hover:text-violet-60" type="button" onClick={handleSubmit}>
          <send_icon_1.default size={20}/>
        </button>
      </div>
    </form>);
};
exports.default = NoteInput;
