import { $, driver } from "@wdio/globals"

class AddNoteScreen {
    
  get skipBtn() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
    );
  }

  get addNoteText() {
    return $('//*[@text="Add note"]');
  }
  
  get addNoteBtn() {
    return $("//*[@text='Add note']");
  }

  get textItem() {
    return $("//*[@text='Text']");
  }

  get textEditing() {
    return $('//*[@text="Editing"]');
  }

  get titleHead() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
    );
  }

  get titleBody() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
    );
  }

  get editBtn() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'
    );
  }

  get viewNote() {
    return $(
      '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'
    );
  }

  get itemMore() {
    return $('~More')
  }

  get deleteBtn(){
    return $('//*[@text="Delete"]')
  }

  get navigationIcon() {
    return $('id=com.socialnmobile.dictapps.notepad.color.note:id/icon_nav')
  }

  get trashCan() {
    return $("//*[@text='Trash Can']")
  }

  get deletedNote() {
    return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
  }

  async saveNote() {
    await driver.back();
    await driver.back();
  }

}

// module.exports = new AddNoteScreen();
export default new AddNoteScreen();
