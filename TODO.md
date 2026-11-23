# TODO — bring-the-humans-03 本地仓库骨架（未提交）

## ✅ 已更新：VIDEO.json 已是真实视频地址（2026-11-23 02:25 北京时间核验）

`VIDEO.json` 当前内容：

```json
{"url": "https://www.tiktok.com/@woabsm/video/7711063361836207380"}
```

这是用户 2026-11-23 02:24 发布到其 TikTok 账号 @woabsm 的真实视频全址，
由短链 https://vt.tiktok.com/ZSsRFhJ3e/ 解析得到，未登录实测可看可播、
caption 与定稿逐字一致。占位符版本已不存在——此前本文件与 README.md
仍写着“占位符、提交必被拒”，是过期文字，2026-11-23 早晨已更正，
VIDEO.json 本体与 main.ts 未动。

注意：TikTok App 分享按钮常给短链（`vm.tiktok.com/...`、
`vt.tiktok.com/...`、`tiktok.com/t/...`），短链一律被拒；已按规矩
用浏览器打开短链落地后的 `@handle/video/<id>` 全址。

## 本地验证记录（2026-11-23，北京时间）

在临时目录验证，未污染 repo 根目录（验证后 repo 根目录仍只有
main.ts / LICENSE / VIDEO.json / README.md / TODO.md 五个交付文件，
没有 out/ 等产物）：

- 环境：`node v24.22.1`（满足 kit 要求 ≥22.18；评分运行时为 Node 22）
- 方法：把 repo 的 `main.ts` + `VIDEO.json` 复制到临时目录 `bot/`，
  在其中运行
  `MAKEFUN_BOT_DIR=<tmp>/bot MAKEFUN_OUTPUT_DIR=<tmp>/out node main.ts`
- 结果：**退出码 0**；`<tmp>/out/VIDEO.json` 生成成功，内容与输入
  **逐字节一致**（diff 无差异；两边 SHA-256 同为
  `fa39299354d79423c7f87f984711d0a336d3097c1b255af9e25dd62207ec0e85`，
  这是占位符版 VIDEO.json 的哈希，替换真链接后会变）
- 失败路径抽查：bot 目录缺 VIDEO.json 时，程序按 starter 设计打印
  `VIDEO.json could not be copied from ...: ENOENT ...` 并**退出码 1**
- 一致性核对：repo 的 `main.ts` 与 kit starter 逐字节一致
  （diff 无差异，SHA-256
  `ba133ae1916d7d1769e9671004ac98f3146674f2f279c65762ebbf88c46bd9f5`，
  与 kit.json 清单值一致）；`LICENSE` 同样逐字节一致
  （SHA-256 `c31b3812c449f571742f26f51db65810331e15ca53b9ee492f739288da6c6d36`，
  MIT，OSI 批准）

## 真实链接版验证（2026-11-23 02:25 北京时间；2026-11-23 早晨复核重跑一致）

- 真实 VIDEO.json（`https://www.tiktok.com/@woabsm/video/7711063361836207380`）
  已填入并在临时目录重跑 main.ts：退出码 0，输出与输入逐字节一致。
- 2026-11-23 早晨复核（node v24.22.1，临时目录，未污染 repo）：
  输入与输出 VIDEO.json SHA-256 均为
  `70f37c5ab2cff937803c797fd3bb79add6a2c4fe0cf30cfbc4b625a00c49310e`；
  main.ts 仍为 `ba133ae1916d7d1769e9671004ac98f3146674f2f279c65762ebbf88c46bd9f5`，
  LICENSE 仍为 `c31b3812c449f571742f26f51db65810331e15ca53b9ee492f739288da6c6d36`。
- 本地验证只证明程序能按规则复制 VIDEO.json，不证明视频播放量或排名。

## 还剩哪几步（都未做、未获授权，不要擅自执行）

1. ~~**等用户发 TikTok**~~：**已完成**——用户 2026-11-23 02:24 已用公开
   TikTok 账号 @woabsm 发布 `production/draft-v1.mp4`，caption 与
   `production/CAPTION.txt` 定稿逐字一致（含 `$500 bounty`、写全的
   `make.fun`、play code `makefun-garlic-tadpole-osprey`）。
2. ~~**拿到真实链接后替换 VIDEO.json**~~：**已完成**——已换成上方真实全址，
   并重跑验证通过（SHA 见本轮复核）。
3. ~~**建 GitHub 公开仓库**~~：**已完成**——用户本人 2026-11-23 在
   GitHub 账号 `z4304101` 名下新建公开仓库
   `makefun-bring-the-humans-03`（开赛后创建、MIT 许可证即本仓 LICENSE），
   并给 Muse GitHub App 授权该仓库；助手已于 2026-11-23 13:12 经
   GitHub 连接器推送五个文件，提交
   `c24e3e130454337de5d76b62c5080b83f5d4912d`（下称 c24e3e1）。
   **注意：c24e3e1 是旧版**——不含 README 徽章、main.ts 仍是 starter
   原版。下方「提交前修复记录」的新版（README 徽章 + main.ts 两轮改写）
   **尚未推送**，推送后必须改用新 commit 的 SHA 提交，c24e3e1 不能用。
4. **transcript 打包**：按 kit 规则把正式制作会话的 transcripts
   打成 `transcripts.tar.gz`（含 run record，服务端会脱敏；
   `production/PRODUCTION-LOG.md` 只是本地制作记录，不等于
   transcript bundle）。打包前应先给用户看范围。未打包。
5. **隔离环境跑 kit CLI 提交**：先
   `node cli/makefun.mjs check --kit . --repo <仓库> --transcripts transcripts.tar.gz`，
   再 `submit --competition bring-the-humans-03 --repo-url ... --commit ... --bundle transcripts.tar.gz --keypair wallet.json`
   （需要 Solana keypair 签名）。CLI 只在隔离环境跑，未运行。
6. 截止：**2026-11-25 03:00 北京时间**。每天最多提交 20 次、
   总计 40 次，截止前最后一次提交为最终条目。

## 提交前修复记录（2026-11-23，在一次被记录的会话内完成）

背景：方案报告 `../SUBMIT-PLAN.md` §5.1 与 §2.5 指出两个已推版本
（c24e3e1）不具备的提交条件——README 缺官方动态徽章、main.ts 与
starter 逐字节一致而无 agent 原创行。本节记录本轮在本地的修复；
本轮只改本地文件，未推送、未跑 kit CLI、未生成 keypair。此前各节中
「main.ts 与 kit starter 逐字节一致」的表述是当时（修复前）的事实，
自本轮起不再成立，以下为准。

### 修复 1：README.md 顶部按官方模板加三条动态徽章

- 模板来源：本轮亲自拉取
  `GET https://make.fun/api/competitions/bring-the-humans-03/requirements`
  的 `how_to_submit.readme_template` 原文（未凭报告转述拼模板）。
- 落地：README 第 1 行为模板标题 `# makefun-bring-the-humans-03`
  （`{repo}` 填真实值），其后三条徽章原样连续排列、可见位置，
  不在 HTML 注释或代码块内；`{owner}`→`z4304101`、
  `{repo}`→`makefun-bring-the-humans-03`、
  `{referral_code}`→`kb2xsk3j`（页脚
  `https://make.fun/?ref=kb2xsk3j&...`）、`{description}` 填本条目真实
  说明、`{run}` 填本地运行命令；全文无任何 `{...}` 占位残留。
- 对照验证：用脚本把模板做上述替换后逐行与 README 比对——三条徽章行、
  标题行、页脚 `<sub>` 行均逐字一致（程序化比对，非目测）。
- 同时更新过期表述：标题与 STATUS 段由「LOCAL SKELETON ONLY /
  NOT YET SUBMITTED、仓库未建」改为「仓库已建已推（c24e3e1 为旧版）、
  新版待推、待 transcripts 与提交」；文件表中 main.ts 一行与仓库要求
  段落同步更新。

### 修复 2：main.ts 两轮改写（功能不变）

行为契约两轮前后不变：读 `MAKEFUN_BOT_DIR`（默认 `/bot`）根目录的
VIDEO.json、复制到 `MAKEFUN_OUTPUT_DIR`（默认 `/output`，不存在则建）、
失败时 stderr 报错并以退出码 1 退出；只用 Node 标准库。

**第一轮（整体重写实现表达）**：starter 的平铺脚本改为自有组织——
文件头注释按「程序目的 / 目录契约 / 失败语义」重写；新增
`resolveDirs()`（解析两个目录）与 `deliverVideoJson(botDir, outputDir)`
（建目录并复制）两个函数；常量改小驼峰局部变量。diff（starter → 第一轮）：

```diff
@@ -1,31 +1,40 @@
-// A working bring-the-humans-03 entry (Node 22, standard library only): it copies VIDEO.json from the repository root
-// to /output/VIDEO.json, where the gate reads it. That is all the program has to do. The entry is the video itself:
-// your agent makes an original short vertical ad for make.fun, the ad is posted publicly on TikTok from a public account
-// with the bounty's line and your play code in its caption (or the code in the account's bio), VIDEO.json names the
-// video, and the house reads the video's views from TikTok. Nothing this program writes about the video is scored.
+// Entry program for the bring-the-humans-03 bounty (Node 22, standard library only).
 //
-// The ad shows make.fun's brand badge (the mascot mark and the make.fun wordmark) from its first frame and ends on
-// make.fun's referral end card with your own referral code in its field, both from make.fun's press pack and used as
-// they are, as is every make.fun mark, wordmark or colour in it: https://make.fun/press/manifest.json lists the files
-// and https://make.fun/press/llms.txt is the guide for agents. Fetch them when you make the ad; this repository holds
-// no copy of them. No check reads the video for them: make.fun's admins may disqualify a video without them.
+// What this program does is deliberately small: the graded deliverable of this
+// entry is a TikTok video, and this repository only has to hand the grader the
+// video's address. So main.ts takes VIDEO.json from the repository root and
+// places a copy in the output directory, where the gate picks it up.
 //
-// The VIDEO.json this starter ships holds a placeholder address, so the gate refuses it as it stands (valid 0).
-// Replace it with your video's address before you submit.
-//
-// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for /bot and /output:
-//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
+// Directory contract:
+//   - input  directory: MAKEFUN_BOT_DIR, default "/bot"
+//   - output directory: MAKEFUN_OUTPUT_DIR, default "/output"
+// The output directory is created when it does not exist yet. If VIDEO.json
+// cannot be copied (most commonly because it is missing), the program reports
+// the failure on stderr and exits with code 1 instead of pretending success.
 
 import { copyFileSync, mkdirSync } from 'node:fs';
 import { join } from 'node:path';
 
-const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
-const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
+// Resolve the two directories once, honouring the environment overrides that
+// let the same file run outside the grader's container.
+function resolveDirs() {
+  return {
+    botDir: process.env.MAKEFUN_BOT_DIR ?? '/bot',
+    outputDir: process.env.MAKEFUN_OUTPUT_DIR ?? '/output',
+  };
+}
+
+// Copy VIDEO.json from the bot directory into the output directory.
+// Returns nothing; throws whatever the filesystem throws.
+function deliverVideoJson(botDir: string, outputDir: string) {
+  mkdirSync(outputDir, { recursive: true });
+  copyFileSync(join(botDir, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
+}
 
-mkdirSync(OUTPUT_DIR, { recursive: true });
+const { botDir, outputDir } = resolveDirs();
 try {
-  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
+  deliverVideoJson(botDir, outputDir);
 } catch (err) {
-  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
+  console.error(`VIDEO.json could not be copied from ${botDir}: ${(err as Error).message}`);
   process.exit(1);
 }
```

**第二轮（小修订：改进错误信息）**：错误信息由只报源目录改为同时给出
源文件全路径、目标全路径与补法（把 VIDEO.json 放回仓库根目录），
并加注释说明理由；退出码不变。diff（第一轮 → 第二轮）：

```diff
@@ -35,6 +35,11 @@
 try {
   deliverVideoJson(botDir, outputDir);
 } catch (err) {
-  console.error(`VIDEO.json could not be copied from ${botDir}: ${(err as Error).message}`);
+  // Name both endpoints and the fix, so a failed run is self-explanatory in
+  // the grader log: VIDEO.json belongs in the repository root (the bot dir).
+  console.error(
+    `VIDEO.json could not be copied from ${join(botDir, 'VIDEO.json')} to ${join(outputDir, 'VIDEO.json')}: ${(err as Error).message}. ` +
+      `Make sure VIDEO.json exists in the repository root.`,
+  );
   process.exit(1);
 }
```

**两轮验证（每轮改完即跑，临时目录，未污染 repo 根目录）**：
方法同前：把当轮 main.ts + 真实 VIDEO.json 复制到临时 `bot/`，
`MAKEFUN_BOT_DIR=<tmp>/bot MAKEFUN_OUTPUT_DIR=<tmp>/out node main.ts`，
另以空目录作 bot dir 测缺文件路径。两轮结果相同且均通过：
- 有文件：退出码 0，输出 VIDEO.json 与输入逐字节一致
  （SHA-256 均为 `70f37c5ab2cff937803c797fd3bb79add6a2c4fe0cf30cfbc4b625a00c49310e`）；
- 缺文件：退出码 1；第二轮 stderr 为改进后的新文案
  （含源/目标全路径与 “Make sure VIDEO.json exists in the repository root.”）。

### 本轮文件状态（改后 SHA-256）

- `main.ts`：`b5e83b4b5fea022d0ccedff9f81d039506d62b5a123e8f1405af503e5e1a8797`（两轮改写后）
- `README.md`：`fb7a511a2923bd2b3d2b282d480433d7ceef03a740f92acd7f0d7dd683bc0976`
- `VIDEO.json`：`70f37c5ab2cff937803c797fd3bb79add6a2c4fe0cf30cfbc4b625a00c49310e`（**未动，与改前一致**）
- `LICENSE`：`c31b3812c449f571742f26f51db65810331e15ca53b9ee492f739288da6c6d36`（**未动，与改前一致**）
- `TODO.md`：本节写入后以会话汇报的实测值为准。

**待推送文件清单（新版，尚未推送）**：`README.md`、`main.ts`、`TODO.md`
（`VIDEO.json`、`LICENSE` 内容未变，随整仓推送亦可）。推送后提交必须
改用新 commit 的完整 SHA，不得再用 c24e3e1。
