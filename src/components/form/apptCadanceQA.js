import React from 'react';

const ApptCadanceQA = ({onSetCadance, nextQuestion}) => {
    return(
        <div>
    
            <div>On what day would you like to send reminders? </div>
            <div>
                <select onChange={onSetCadance} >
                    <option>Day 1</option>
                    <option>Day 2</option>
                    <option>Day 3</option>
                </select>
            </div>
        </div>
    );
}

export default ApptCadanceQA;

/* <div name="settings.reminder.schedule" style="font-size: 16px; line-height: 24px; width: 100%; height: 72px; display: inline-block; position: relative; background-color: transparent; font-family: freight-sans-pro, sans-serif; transition: height 200ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; cursor: auto; font-weight: 500;"><label for="settingsreminderschedule-undefined-Howlongbeforeanappointmentshouldwesendreminderstopatients-27727" style="position: absolute; line-height: 20px; top: 12px; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; z-index: 1; transform: none; transform-origin: left top; pointer-events: none; user-select: none; color: rgb(98, 120, 138); font-weight: 500; width: 100%;">How long before an appointment should we send reminders to patients?</label><div id="settingsreminderschedule-undefined-Howlongbeforeanappointmentshouldwesendreminderstopatients-27727" style="display: block; font: inherit; height: 100%; outline: none; position: relative; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; padding: 0px; width: 100%; border: none; background-color: rgba(0, 0, 0, 0); color: rgb(14, 53, 81); cursor: inherit; opacity: 1; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); box-sizing: border-box; margin-top: 14px;"><div style="cursor: pointer; height: 100%; position: relative; width: 100%;"><div style="box-sizing: border-box; content: &quot; &quot;; display: table;"></div><div style="color: rgb(14, 53, 81); height: 56px; line-height: 56px; overflow: hidden; opacity: 1; position: relative; padding-left: 0px; padding-right: 56px; text-overflow: ellipsis; top: 6px; white-space: nowrap;">1 day before their appointment</div><button tabindex="0" type="button" style="border: 10px; box-sizing: border-box; display: inline-block; font-family: freight-sans-pro, sans-serif; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: pointer; text-decoration: none; margin: 0px; padding: 12px; outline: none; font-size: 0px; font-weight: inherit; position: absolute; overflow: visible; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms; width: 48px; height: 48px; fill: rgb(224, 224, 224); right: 0px; top: 8px; background: none;"><div><svg viewBox="0 0 24 24" style="display: inline-block; color: rgb(14, 53, 81); fill: inherit; height: 24px; width: 24px; user-select: none; transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;"><path d="M7 10l5 5 5-5z"></path></svg></div></button><div style="border-top: none; bottom: 1px; left: 0px; margin: -1px 24px; right: 0px; position: absolute;"></div><div style="box-sizing: border-box; content: &quot; &quot;; clear: both; display: table;"></div></div><div style="display: none;"></div></div><div><hr aria-hidden="true" style="border-top: none rgb(224, 224, 224); border-left: none rgb(224, 224, 224); border-right: none rgb(224, 224, 224); border-bottom: 1px solid rgb(224, 224, 224); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%;"><hr aria-hidden="true" style="border-top: none rgb(11, 43, 91); border-left: none rgb(11, 43, 91); border-right: none rgb(11, 43, 91); border-bottom: 2px solid rgb(11, 43, 91); bottom: 8px; box-sizing: content-box; margin: 0px; position: absolute; width: 100%; transform: scaleX(0); transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;"></div></div> */