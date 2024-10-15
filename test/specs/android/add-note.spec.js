// import { $,  driver } from "@wdio/globals"

describe("Add Notes", () => {

  it("Skip tutorial ", async () => {
    await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
    await expect($('//*[@text="Add note"]')).toBeDisplayed();
  });

  it("add note, save changes & verify note ", async () => {
    await $("//*[@text='Add note']").click();
    await $("//*[@text='Text']").click()

    await expect($('//*[@text="Editing"]')).toBeDisplayed()

    //add title
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    ).addValue("Fav Anime List");

    //add note
    await $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    ).addValue("Naruto \n OnePiece\n AOT");

    await driver.back();
    await driver.back();

    await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
      )).toBeDisplayed();

    await expect(
       $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
      )).toHaveText("Naruto \n OnePiece\n AOT");
  });


  it("delete note ", async () => {

    await $('~More').click();
    await $('//*[@text="Delete"]').click();
    await driver.acceptAlert();
    await $('id=com.socialnmobile.dictapps.notepad.color.note:id/icon_nav').click()
    await $("//*[@text='Trash Can']").click();

    const deletedNote = $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    expect(deletedNote).toHaveText('Fav Anime List');
  
  })

});
