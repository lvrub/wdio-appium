import {AddNoteScreen}  from "./add-note.screen";
import { $ } from "@wdio/globals"

class EditNoteScreen {

  get skipBtn() {
    return AddNoteScreen.skipBtn.click();
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

  async acceptDeleting() {
    await driver.acceptAlert();
  }
}

// module.exports = new EditNoteScreen();
export default new EditNoteScreen()
