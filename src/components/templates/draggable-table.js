"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var immutability_helper_1 = require("immutability-helper");
var lodash_1 = require("lodash");
var react_1 = require("react");
var react_dnd_1 = require("react-dnd");
var react_dnd_html5_backend_1 = require("react-dnd-html5-backend");
var react_table_1 = require("react-table");
var button_1 = require("../fundamentals/button");
var grip_icon_1 = require("../fundamentals/icons/grip-icon");
var trash_icon_1 = require("../fundamentals/icons/trash-icon");
var table_1 = require("../molecules/table");
var DraggableTable = function (_a) {
    var entities = _a.entities, setEntities = _a.setEntities, onDelete = _a.onDelete, columns = _a.columns;
    var _b = (0, react_1.useState)(entities), records = _b[0], setRecords = _b[1];
    (0, react_1.useEffect)(function () {
        setRecords(entities);
    }, [entities]);
    (0, react_1.useEffect)(function () { return setEntities(records); }, [records]);
    var DND_ITEM_TYPE = "row";
    var _c = (0, react_table_1.useTable)({
        columns: columns,
        data: records,
    }), getTableProps = _c.getTableProps, getTableBodyProps = _c.getTableBodyProps, headerGroups = _c.headerGroups, rows = _c.rows, prepareRow = _c.prepareRow;
    var moveRow = function (dragIndex, hoverIndex) {
        var dragRecord = records[dragIndex];
        setRecords((0, immutability_helper_1.default)(records, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragRecord],
            ],
        }));
        setEntities((0, immutability_helper_1.default)(records, {
            $splice: [
                [dragIndex, 1],
                [hoverIndex, 0, dragRecord],
            ],
        }));
    };
    var debouncedMoveRow = (0, react_1.useMemo)(function () { return (0, lodash_1.debounce)(moveRow, 100); }, []);
    (0, react_1.useEffect)(function () {
        return function () {
            debouncedMoveRow.cancel();
        };
    }, []);
    var Row = function (_a) {
        var row = _a.row, index = _a.index, moveRow = _a.moveRow;
        var dropRef = (0, react_1.useRef)(null);
        var dragRef = (0, react_1.useRef)(null);
        var _b = (0, react_dnd_1.useDrop)(function () { return ({
            accept: DND_ITEM_TYPE,
            hover: function (item, monitor) {
                if (!dropRef.current) {
                    return;
                }
                var dragIndex = item.index;
                var hoverIndex = index;
                // Don't replace items with themselves
                if (dragIndex === hoverIndex) {
                    return;
                }
                // return // TODO: fix hover/drop action
                // if (latestMoved?.from === dragIndex && latestMoved?.to === hoverIndex) {
                //   return
                // }
                // Determine rectangle on screen
                var hoverBoundingRect = dropRef.current.getBoundingClientRect();
                // Get vertical middle
                var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
                // Determine mouse position
                var clientOffset = monitor.getClientOffset();
                // Get pixels to the top
                var hoverClientY = clientOffset.y - hoverBoundingRect.top;
                // Only perform the move when the mouse has crossed half of the items height
                // When dragging downwards, only move when the cursor is below 50%
                // When dragging upwards, only move when the cursor is above 50%
                // Dragging downwards
                if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                    return;
                }
                // Dragging upwards
                if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                    return;
                }
                // Time to actually perform the action
                // setLatestMoved({ from: dragIndex, to: hoverIndex })
                moveRow(dragIndex, hoverIndex);
                // Note: we're mutating the monitor item here!
                // Generally it's better to avoid mutations,
                // but it's good here for the sake of performance
                // to avoid expensive index searches.
                item.index = hoverIndex;
            },
        }); }), _ = _b[0], drop = _b[1];
        var _c = (0, react_dnd_1.useDrag)(function () { return ({
            type: "row",
            item: { index: index },
            collect: function (monitor) { return ({
                isDragging: !!monitor.isDragging(),
            }); },
        }); }), isDragging = _c[0].isDragging, drag = _c[1], preview = _c[2];
        var opacity = isDragging ? 0 : 1;
        preview(drop(dropRef));
        drag(dragRef);
        return (<table_1.default.Row ref={dropRef} style={{ opacity: opacity }}>
        <table_1.default.Cell className="medium:w-[72px] small:w-auto">
          <button_1.default ref={dragRef} variant="ghost" size="small" className="h-6 w-6 cursor-grab text-grey-40 mx-6">
            <grip_icon_1.default size={20}/>
          </button_1.default>
        </table_1.default.Cell>
        {row.cells.map(function (cell) {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
        {onDelete && (<table_1.default.Cell>
            <button_1.default onClick={function () { return onDelete(row.original); }} variant="ghost" size="small" className="p-1 text-grey-40 cursor-pointer mx-6">
              <trash_icon_1.default size={20}/>
            </button_1.default>
          </table_1.default.Cell>)}
      </table_1.default.Row>);
    };
    return (<div className="w-full h-full">
      <react_dnd_1.DndProvider backend={react_dnd_html5_backend_1.HTML5Backend}>
        <table_1.default {...getTableProps()}>
          <table_1.default.Head>
            {headerGroups === null || headerGroups === void 0 ? void 0 : headerGroups.map(function (headerGroup) { return (<table_1.default.HeadRow {...headerGroup.getHeaderGroupProps()}>
                <table_1.default.HeadCell> </table_1.default.HeadCell>
                {headerGroup.headers.map(function (col) { return (<table_1.default.HeadCell {...col.getHeaderProps()}>
                    {col.render("Header")}
                  </table_1.default.HeadCell>); })}
              </table_1.default.HeadRow>); })}
          </table_1.default.Head>
          <table_1.default.Body {...getTableBodyProps()}>
            {rows.map(function (row, index) {
            return prepareRow(row) || (<Row index={index} row={row} moveRow={moveRow} {...row.getRowProps()}/>);
        })}
          </table_1.default.Body>
        </table_1.default>
      </react_dnd_1.DndProvider>
    </div>);
};
exports.default = DraggableTable;
