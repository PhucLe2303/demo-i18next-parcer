import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  const handleChangeLanguge = (e) => {
    if (e.target.value !== "0") i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="App">
      <div>{t("welcome")}</div>
      <div className="custom-select">
        <select onChange={handleChangeLanguge}>
          <option value="0">{t("language")}</option>
          <option value="en">{t("english")}</option>
          <option value="vi">{t("vietnam")}</option>
        </select>
      </div>
    </div>
  );
}

export default App;
