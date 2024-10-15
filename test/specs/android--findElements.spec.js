import { $,  $$ } from "@wdio/globals"


describe("Android Element Tests", () => {

  it("Find element by accessebility id", async () => {
    const appOption = $("~App");

    await appOption.click();

    const actionBar =  $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });

  it("Find element by class name", async () => {
    const className = $("android.widget.TextView");
    console.log(await className.getText());

    await expect(className).toHaveText("API Demos");
  });

  it("Find element by Xpath", async () => {
    //xpath
    await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

    //find by resource id
    await $(
      '//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]'
    ).click();

    //find by text
    await $('//android.widget.TextView[@text="Command two"]').click();

    //find by class - assertion
    const textAssertion = $("//android.widget.TextView");
    await expect(textAssertion).toHaveText("You selected: 1 , Command two");
  });

  it("Find element by UIAutomator", async () => {
    await $("~App").click();
    // by contains
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  it("Find miltiple elements", async () => {
    let expectedList = [
      "API Demos",
      "Access'ibility",
      "Accessibility",
      "Animation",
      "App",
      "Content",
      "Graphics",
      "Media",
      "NFC",
      "OS",
      "Preference",
      "Text",
      "Views",
    ];
    let actualList = [];

    const textList = $$("android.widget.TextView");

    for (const el of textList) {
      actualList.push(await el.getText());
    }

    expect(actualList).toEqual(expectedList);
  });

  it("verify text in text field", async () => {
    await $('~Views').click();
    await $('~Auto Complete').click();
    await $("//*[@text='1. Screen Top']").click();

    const  input = $('//*[@resource-id="io.appium.android.apis:id/edit"]')
    await  input.addValue('Canada');

    await expect(input).toHaveText('Canada')
  })

});


