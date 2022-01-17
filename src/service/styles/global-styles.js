import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --green: #1F846B;
        --brown: #C85037;
        --white: #fff;
        --drak-yellow: #EDA91E;
        --light-blue: #46CBDE;
        --dark-blue: #2E3192;
        --medium-blue: #0C46E8;
        --blue: #0D8CFF;
        --red: #FF0000;
        --dark-orange: #E82C0C;
        --orange: #FF530D;
        --dark-gray: #808080;
        --transition-d: all 0.3s ease-in-out;
    };

    html, body, #root{
        min-height: 100vh;
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Roboto', sans-serif;
    };
    
    h1, h2, h3, h4, h5 {
    margin: 0;
  }
    input, button {
        font-family: 'Roboto', sans-serif;
    }
    
    input:focus {
        outline: none;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: var(--white);
    }

    button {
        background: none;
        border: none;
    }
`;
