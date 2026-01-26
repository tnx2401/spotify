import { useTranslations } from "next-intl"

export default function Home() {
    const t = useTranslations("Home");
    return (
        <div>
            Hello
            <h1>{t("welcome")}</h1>
        </div>
    )
}