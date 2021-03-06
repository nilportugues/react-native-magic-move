import React from "react";
import { View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";
import Main from "./Main";
import Scene1 from "./Scene1";
import Scene2 from "./Scene2";
import Scene3 from "./Scene3";
import Scene4 from "./Scene4";
import * as MagicMove from "./magic-move";

const App = () => (
  <View style={{ margin: 0, flex: 1 }}>
    <MagicMove.Provider>
      <Router>
        <Stack key="root">
          <Scene key="main" component={Main} title="react-native-magic-move" />
          <Scene key="scene1" component={Scene1} title="Color Change" />
          <Scene key="scene2" component={Scene2} title="ScrollView" />
          <Scene key="scene3" component={Scene3} title="Image" />
          <Scene key="scene4" component={Scene4} title="Magic Move" />
        </Stack>
      </Router>
    </MagicMove.Provider>
  </View>
);
export default App;
