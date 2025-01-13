import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "../../../components/ui/tooltip";
const Tooltop = ({ text, icon }) => {
    return (_jsx(TooltipProvider, { children: _jsxs(Tooltip, { children: [_jsx(TooltipTrigger, { className: '', children: icon }), _jsx(TooltipContent, { children: _jsx("p", { children: text }) })] }) }));
};
export default Tooltop;
