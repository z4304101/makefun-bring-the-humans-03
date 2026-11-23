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
3. **建 GitHub 公开仓库**：须用户本人 GitHub 账号 `z4304101` 名下、
   开赛后（2026-11-22 03:00 北京时间之后）新建、公开、MIT 许可证，
   把本骨架五个文件放仓库根目录。未建、未推送。
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
