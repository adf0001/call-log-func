
// call-log-func @ npm, a call log function tool.

module.exports = function (logFunc, message) {
	if (typeof logFunc === "function") logFunc(message);
	else if (typeof logFunc === "string") console.log((logFunc ? (logFunc + ", ") : "") + message);
	else if (logFunc && typeof logFunc.log === "function") logFunc.log(message);
}
