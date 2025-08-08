"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var clsx_1 = require("clsx");
var sidebar_team_member_1 = require("../../molecules/sidebar-team-member");
var plus_icon_1 = require("../../fundamentals/icons/plus-icon");
var arrow_left_icon_1 = require("../../fundamentals/icons/arrow-left-icon");
var arrow_right_icon_1 = require("../../fundamentals/icons/arrow-right-icon");
var invite_modal_1 = require("../invite-modal");
var medusa_react_1 = require("medusa-react");
var PAGE_SIZE = 6;
var getColor = function (index) {
    var colors = [
        "bg-fuschia-40",
        "bg-pink-40",
        "bg-orange-40",
        "bg-teal-40",
        "bg-cyan-40",
        "bg-blue-40",
        "bg-indigo-40",
    ];
    return colors[index % colors.length];
};
var PaginationArrows = function (_a) {
    var _b, _c;
    var handlePreviousPage = _a.handlePreviousPage, handleNextPage = _a.handleNextPage, currentPage = _a.currentPage, paginationLength = _a.paginationLength;
    var enabledClasses = " hover:bg-grey-5 cursor-pointer";
    var disabledClasses = "text-grey-30";
    return (<div className="flex text-grey-50">
      <span onClick={handlePreviousPage} className={(0, clsx_1.default)("mr-1.5 w-5 h-5 transition rounded-base flex justify-center items-center", (_b = {},
            _b["".concat(disabledClasses)] = currentPage === 0,
            _b["".concat(enabledClasses)] = currentPage !== 0,
            _b))}>
        <arrow_left_icon_1.default size={16}/>
      </span>
      <span onClick={handleNextPage} className={(0, clsx_1.default)("w-5 h-5 transition rounded-base flex justify-center items-center", (_c = {},
            _c["".concat(disabledClasses)] = currentPage + 1 === paginationLength,
            _c["".concat(enabledClasses)] = currentPage + 1 !== paginationLength,
            _c))}>
        <arrow_right_icon_1.default size={16}/>
      </span>
    </div>);
};
var SidebarTeam = function () {
    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];
    var _b = (0, react_1.useState)(0), currentPage = _b[0], setCurrentPage = _b[1];
    var _c = (0, react_1.useState)([]), paginatedUsers = _c[0], setPaginatedUsers = _c[1];
    var _d = (0, medusa_react_1.useAdminUsers)(), users = _d.users, isLoading = _d.isLoading;
    (0, react_1.useEffect)(function () {
        if (!isLoading && (users === null || users === void 0 ? void 0 : users.length)) {
            var paginationResult = [];
            for (var i = 0; i < users.length; i += PAGE_SIZE) {
                paginationResult.push(users.slice(i, i + PAGE_SIZE));
            }
            setPaginatedUsers(paginationResult);
        }
    }, [isLoading, users]);
    var previousPage = function () {
        if (currentPage !== 0) {
            setCurrentPage(currentPage - 1);
        }
    };
    var nextPage = function () {
        if (paginatedUsers.length !== currentPage + 1) {
            setCurrentPage(currentPage + 1);
        }
    };
    return (<div className="h-72 border-b border-grey-20">
      <div className="flex items-center justify-between">
        <span className="text-grey-50 ">Your team</span>
        <div className="flex stroke-grey-50">
          <PaginationArrows handleNextPage={nextPage} handlePreviousPage={previousPage} currentPage={currentPage} paginationLength={paginatedUsers.length}/>
        </div>
      </div>

      {paginatedUsers[currentPage] &&
            paginatedUsers[currentPage].map(function (u, index) { return (<sidebar_team_member_1.default color={getColor(index)} key={u.id} user={u}/>); })}
      <div onClick={function () { return setIsOpen(true); }} className="flex items-center bg-grey-0 px-2.5 py-1.5 cursor-pointer text-violet-60">
        <div className="w-[24px] h-[24px]  bg-violet-20 text-violet-60 rounded-full text-center flex justify-center items-center text-violet-60">
          <plus_icon_1.default size={16}/>
        </div>
        <span className="ml-2.5">Invite your team</span>
      </div>
      {isOpen && <invite_modal_1.default handleClose={function () { return setIsOpen(false); }}/>}
    </div>);
};
exports.default = SidebarTeam;
