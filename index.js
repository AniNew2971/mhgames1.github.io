import {singularSdk, SingularConfig} from "singular-sdk";

function initSingularTest() {      
    const config = new SingularConfig(sdkKey, sdkSecret, productId)
      .withInitFinishedCallback(initParams=> {
        // This callback will be called when the init method has finished
  
        // You can get Singular Device id here
        const singularDeviceId = initParams.singularDeviceId;
        console.log(singularDevice, "from index.js")
      });
  singularSdk.init(config);
  }

initSingularTest();