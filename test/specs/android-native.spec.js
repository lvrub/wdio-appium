describe("Android Native Feature Tests", () => {
  it("Access an Activity directly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    await driver.pause(3000);

    await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
  });

  it("Working with Dialog Boxes ", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );

    await $(
      '//*[@resource-id="io.appium.android.apis:id/two_buttons2"]'
    ).click();
    //accept/dismiss alert
    // await driver.acceptAlert();
    // await driver.dismissAlert();

    // get alert text
    console.log(`ALERT TEXT => ${await driver.getAlertText()}`);

    //click button
    await $('//*[@resource-id="android:id/button1"]').click();

    //assert no alert box
    await expect(
      $('//*[@resource-id="android:id/title_template"]')
    ).not.toExist();
  });

  it("vertical scrolling ", async () => {
    await $("~App").click();
    await $("~Activity").click();

    //scroll to end and click
    // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrolltoEnd(1,5)');
    // await $('~Secure Surfaces').click();

    //scrollTextIntoView
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();

    await expect($("~Secure Dialog")).toExist();
  });

  it("horizontal scrolling ", async () => {

    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );

    //horizontal scrolling
    $(      'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'
    );
    $(      'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()'
    );

    await driver.pause(4000)
  });

  it.only("horizontal exercise ", async () => {

    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );

    const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
    await $('~change the date').click();
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'
    );
    await $("//*[contains(@content-desc, '10')]").click();
    await $('android=new UiSelector().textContains("OK")').click();
    const newDate = await date.getText();

    await expect(date).not.toEqual(newDate);
});

});
