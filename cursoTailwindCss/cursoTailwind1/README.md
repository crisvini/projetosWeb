npm init -y

npm install tailwindcss@latest postcss@latest autoprefixer@latest

npx tailwindcss init

criar um arquivo css styles.css com @tailwind base; @tailwind components; @tailwind utilities;

criar uma pasta src/css/

npx tailwindcss-cli@latest build styles.css -o src/css/styles.css <--- utilizar sempre que fizer uma alteracao no styles.css
