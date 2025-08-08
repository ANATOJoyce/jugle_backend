"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DropdownMenu = require("@radix-ui/react-dropdown-menu");
var emoji_picker_react_1 = require("emoji-picker-react");
var react_1 = require("react");
var button_1 = require("../../fundamentals/button");
var happy_icon_1 = require("../../fundamentals/icons/happy-icon");
var groupNames = {
    smileys_people: "Smileys & People",
    animals_nature: "Animals & Nature",
    food_drink: "Food & Drink",
    travel_places: "Travel & Places",
    activities: "Activities",
    objects: "Objects",
    symbols: "Symbols",
    flags: "Flags",
    recently_used: "Recently Used",
};
var EmojiPicker = function (_a) {
    var onEmojiClick = _a.onEmojiClick;
    return (<DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button_1.default variant="ghost" size="small" className="focus:border-none focus:shadow-none text-grey-40 hover:text-violet-60 p-0 h-5 w-5">
          <happy_icon_1.default size={20}/>
        </button_1.default>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content sideOffset={5} className="border bg-grey-0 border-grey-20 rounded-rounded shadow-dropdown overflow-hidden min-w-[200px] z-30">
        <emoji_picker_react_1.default onEmojiClick={function (e, data) { return onEmojiClick(data.emoji); }} disableAutoFocus={true} skinTone={emoji_picker_react_1.SKIN_TONE_NEUTRAL} groupNames={{ smileys_people: "PEOPLE" }} native disableSkinTonePicker={true} searchPlaceholder={"Search Emoji..."} groupNames={groupNames}/>
      </DropdownMenu.Content>
    </DropdownMenu.Root>);
};
exports.default = EmojiPicker;
