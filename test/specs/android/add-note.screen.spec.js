import AddNoteScreen from "../../screenobjects/android/add-note.screen";
import EditNoteScreen from "../../screenobjects/android/edit-note.screen";

describe("Add Notes", () => {

  before( async  ()=>{
    await AddNoteScreen.skipBtn.click();
    await expect(AddNoteScreen.addNoteText).toBeDisplayed();
    
  })

  // it("Skip tutorial ", async () => {
   
  //   await AddNoteScreen.skipBtn.click();
  //   await expect(AddNoteScreen.addNoteText).toBeDisplayed();
  // });

  it("add note, save changes & verify note ", async () => {
    await AddNoteScreen.addNoteBtn.click();
    await AddNoteScreen.textItem.click();

    await expect(AddNoteScreen.textEditing).toBeDisplayed();
    //add title
    await AddNoteScreen.titleHead.addValue("Fav Anime List");
    //add note
    await AddNoteScreen.titleBody.addValue("Naruto \n OnePiece\n AOT");

    await AddNoteScreen.saveNote();

    await expect(AddNoteScreen.editBtn).toBeDisplayed();

    await expect(AddNoteScreen.viewNote).toHaveText("Naruto \n OnePiece\n AOT");

  });


  it("delete note ", async () => {

    await EditNoteScreen.itemMore.click();
    await EditNoteScreen.deleteBtn.click();
    await EditNoteScreen.acceptDeleting();
    await EditNoteScreen.navigationIcon.click()
    await EditNoteScreen.trashCan.click();

    // const deletedNote = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
    expect(EditNoteScreen.deletedNote).toHaveText('Fav Anime List');
  
  })

});
