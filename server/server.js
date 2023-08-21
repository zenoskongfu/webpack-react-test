const express = require("express");
const path = require("path");

/** 创建一个路由，总是返回dist文件夹下面的index.html */
const router = express.Router();
router.use(express.static(path.resolve(__dirname, "../dist")));
router.get("/*", (req, res) => {
	const filePath = path.resolve(__dirname, "../dist/index.html");
	res.sendFile(filePath, { Headers: { "Content-Type": "text/html" } });
});

const router2 = express.Router();
router2.get("/getUser", (req, res) => {
	res.end(JSON.stringify({ name: "zhangsan" }));
});

/** 启动服务器，监听express */
const app = express();
app.use("/fetch", router2);
app.use(router);
app.listen(3000, () => {
	console.log("server is running at port 3000");
});
