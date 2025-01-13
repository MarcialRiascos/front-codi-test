import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
const RevenueCard = ({ title, value, text }) => {
    return (_jsxs(Card, { className: "w-full max-w-sm", children: [_jsx(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: _jsx(CardTitle, { className: "text-sm font-medium", children: title || 'Total Revenue' }) }), _jsxs(CardContent, { children: [_jsx("div", { className: "text-2xl font-bold", children: value || '$15,231.89' }), _jsx("p", { className: "text-xs text-muted-foreground", children: text || 'Revenue for the last 30 days' })] })] }));
};
export default RevenueCard;
