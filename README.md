# 每日飲食選單 Daily Diet Planner 🏋️
A mobile-first personal daily diet selector app — dark mode, no dependencies, runs entirely in the browser.
https://ychen6003.github.io/daily_food/

## 功能特色 Features

-  **四種運動日型** — 無運動日、有氧日、重訓日、彈性日，各自對應熱量目標與巨量營養素比例
-  **三層評分引擎** — 根據日型、剩餘巨量營養素、排除規則，自動分類推薦 / 次選 / 不建議
-  **完整餐次流程** — 早餐（複選 + 數量）→ 午餐 → 晚餐（重訓日：訓前 + 訓後）
-  **即時儀表板** — 熱量進度環、碳水 / 蛋白質 / 脂肪橫條圖、剩餘量即時更新
-  **食物管理後台** — 新增、編輯、刪除、拖曳排序；支援多餐別標記
-  **鎖定深色模式** — 強制 dark mode，不受系統設定影響


## 檔案結構 File Structure

```
daily-diet-app/
├── index.html      # 主應用程式（HTML + CSS + JS）
├── foods.js        # 食物資料庫（可獨立編輯）
└── README.md       # 本說明文件
```

## 自訂食物資料 Customizing Foods

編輯 `foods.js` 中的 `FOODS_DATA` 陣列，欄位說明：

| 欄位 | 說明 |
|------|------|
| `id` | 唯一 ID（字串） |
| `meal` | 餐別陣列，可包含：`早餐` / `午餐` / `晚餐` / `訓前補給` / `訓後補給` |
| `name` | 品項名稱 |
| `icon` | Emoji 圖示 |
| `cal` | 熱量 (kcal) |
| `carb` / `prot` / `fat` | 碳水 / 蛋白質 / 脂肪 (g) |
| `cat` | 分類：`高蛋白` / `均衡` / `中碳` / `低脂` / `原型澱粉` / `精緻澱粉` / `高脂` / `油炸` / `飲品` |
| `fit` | 適合日型陣列：`rest` / `cardio` / `strength` / `flex` |
| `pre` / `post` | 是否適合訓前 / 訓後補給（boolean） |
| `dinner_ok` | `true` = 晚餐可選，`false` = 不建議晚餐，`undefined` = 不適用 |
| `subcat` | 午/晚餐分類篩選：`飯` / `麵` / `其他`（選填） |
| `proc` | 加工程度：`原型` / `輕加工` / `高加工` |
| `pl` / `cl` / `fl` / `fib` / `sat` | 蛋白質 / 碳水 / 脂肪 / 纖維 / 飽足感含量：`高` / `中` / `低` |
| `exc` | 選此品項後排除的分類（選填） |
| `note` | 備註（選填） |

## 版本 Version

v16 — 2026

