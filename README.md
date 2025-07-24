### Перед запуском необходимо:

1. ```npm init playwright@latest```
2. ```npm install dotenv --save```

### Полезное:

1. Запуск конкретного теста только в хроме ```npx playwright test -g "Get base loan with login" --project=chromium```
2. Отладка тестов в UI моде ```npx playwright test --ui```
3. Codegen с Playwright ```npx playwright codegen loan-app.tallinn-learning.ee```
