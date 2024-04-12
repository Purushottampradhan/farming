import React from 'react'
import { useTranslation } from 'react-i18next';
const LanguageSelection = () => {
    // Destructure the translation functions and the i18n object from useTranslation
    const { t, i18n } = useTranslation();
    /**
     * Function to change the language.
     * @param {string} lng - The language code to change to.
     */
    const changeLanguage = (lng) => {
        // Change the language using the i18n object
        i18n.changeLanguage(lng);
    };


    return (
        <>
            <div className="languageSelection">
                {/* Render the title using the t function */}
                <h1>{t('title')}</h1>

                {/* Render the description using the t function */}
                <div>{t('description.part2')}</div>

                {/* Render the language buttons */}
                <div className="App-header">
                    <button type="button" onClick={() => changeLanguage('de')}>
                        de
                    </button>
                    <button type="button" onClick={() => changeLanguage('en')}>
                        en
                    </button>
                </div>

                {/* Render the header with the logo and other elements */}
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        {/* Render the edit message using the t function */}
                        {t('edit')}
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* Render the learn react message using the t function */}
                        {t('learn')}
                    </a>
                </header>
            </div>
        </>
    )
}

export default LanguageSelection