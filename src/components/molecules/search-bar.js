"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@reach/router");
var react_1 = require("react");
var react_hotkeys_hook_1 = require("react-hotkeys-hook");
var os_shortcut_1 = require("../atoms/os-shortcut");
var search_icon_1 = require("../fundamentals/icons/search-icon");
var search_modal_1 = require("../templates/search-modal");
var SearchBar = function () {
    var _a = (0, react_1.useState)(false), showSearchModal = _a[0], setShowSearchModal = _a[1];
    var toggleSearch = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setShowSearchModal(function (show) { return !show; });
    };
    var closeModal = function () {
        setShowSearchModal(false);
    };
    (0, react_hotkeys_hook_1.useHotkeys)("cmd+k", toggleSearch, {}, []);
    (0, react_hotkeys_hook_1.useHotkeys)("ctrl+k", toggleSearch, {}, []);
    (0, react_hotkeys_hook_1.useHotkeys)("/", toggleSearch, {}, []);
    react_1.default.useEffect(function () {
        return router_1.globalHistory.listen(function (_a) {
            var action = _a.action;
            if (action === "PUSH") {
                closeModal();
            }
        });
    }, []);
    return (<>
      <button onClick={function () { return setShowSearchModal(true); }} className="flex basis-1/2 items-center px-small py-[6px]">
        <search_icon_1.default className="text-grey-40"/>
        <div className="ml-5">
          <os_shortcut_1.default macModifiers="⌘" winModifiers="Ctrl" keys="K"/>
        </div>
        <span className="ml-xsmall text-grey-40 inter-base-regular">
          Search anything...
        </span>
      </button>
      {showSearchModal && <search_modal_1.default handleClose={closeModal}/>}
    </>);
};
exports.default = SearchBar;
