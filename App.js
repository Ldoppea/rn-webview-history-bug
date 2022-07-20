/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>A</title>
  </head>
  <body>
    <h1>A</h1>
    <p><a href="./a.html">link to a</a></p>
    <p><a href="./b.html">link to b</a></p>
    <button onclick="window.history.back()">back</button>
    <button onclick="window.history.forward()">forward</button>
    <button onclick="push()">push a#n</button>
    <button onclick="push2()">push b#n</button>
    <button onclick="push3()">push b</button>
    <button onclick="locate()">location = b</button>
    <script>
      console.log("onload a");
      window.start = 0;

      function push() {
        const n = ++window.start;
        window.history.pushState({ n }, \`A \${n}\`, \`./a.html#\${n}\`);
      }

      function push2() {
        const n = ++window.start;
        window.history.pushState({ n }, \`A \${n}\`, \`./b.html#\${n}\`);
      }

      function push3() {
        window.history.pushState({}, \`B\`, \`./b.html\`);
      }

      function locate() {
        window.location = "./b.html";
      }
    </script>
  </body>
</html>
`;

const realSource = {uri: 'https://www.swansontec.com/temp/history/a.html'};
const localSource = {
  html: html,
  baseUrl: 'https://www.swansontec.com/temp/history/a.html',
};

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={localSource} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
