import {createGlobalStyle} from 'styled-components';

// Theme generated with Coolors + Ionic Color Generator

export default createGlobalStyle`
    :root {
		--primary: #E84855;
		--primary-rgb: 232,72,85;
		--primary-contrast: #ffffff;
		--primary-contrast-rgb: 255,255,255;
		--primary-shade: #cc3f4b;
		--primary-tint: #ea5a66;

		--secondary: #1B998B;
		--secondary-rgb: 27,153,139;
		--secondary-contrast: #ffffff;
		--secondary-contrast-rgb: 255,255,255;
		--secondary-shade: #18877a;
		--secondary-tint: #32a397;

		--tertiary: #FFFD82;
		--tertiary-rgb: 255,253,130;
		--tertiary-contrast: #000000;
		--tertiary-contrast-rgb: 0,0,0;
		--tertiary-shade: #e0df72;
		--tertiary-tint: #fffd8f;

		--success: #2dd36f;
		--success-rgb: 45,211,111;
		--success-contrast: #000000;
		--success-contrast-rgb: 0,0,0;
		--success-shade: #28ba62;
		--success-tint: #42d77d;

		--warning: #ffc409;
		--warning-rgb: 255,196,9;
		--warning-contrast: #000000;
		--warning-contrast-rgb: 0,0,0;
		--warning-shade: #e0ac08;
		--warning-tint: #ffca22;

		--danger: #eb445a;
		--danger-rgb: 235,68,90;
		--danger-contrast: #ffffff;
		--danger-contrast-rgb: 255,255,255;
		--danger-shade: #cf3c4f;
		--danger-tint: #ed576b;

		--medium: #92949c;
		--medium-rgb: 146,148,156;
		--medium-contrast: #000000;
		--medium-contrast-rgb: 0,0,0;
		--medium-shade: #808289;
		--medium-tint: #9d9fa6;

		--light: #f4f5f8;
		--light-rgb: 244,245,248;
		--light-contrast: #000000;
		--light-contrast-rgb: 0,0,0;
		--light-shade: #d7d8da;
		--light-tint: #f5f6f9;

		--global-max-width: 1400px;
	}

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    *, button, input{
        font-family: "Roboto", 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

	#root{
		overflow: hidden;
		height: 100vh;
		width: 100vw;
		position: relative;
		font-size: 16px;
	}
	
`;