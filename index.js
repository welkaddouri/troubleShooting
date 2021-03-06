/* Copyright (c) WAKANDA, 2015
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* The Software shall be used for Good, not Evil.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

var
	actions;
actions = {};

actions.isWindows = function isWindows()
{
    return os.isWindows;
}


actions.getTroubleshootingPage = function getTroubleshootingPage()
{
 
    studio.extension.registerTabPage("./index.html", './rsz_welcome.png');
    studio.extension.openPageInTab('./index.html', 'TroubleShooting Page', false);
}


exports.handleMessage = function handleMessage(message)
{
	"use strict";
	var	actionName;

	actionName = message.action;

	if (!actions.hasOwnProperty(actionName)) {
		studio.alert("I don't know about this message: " + actionName);
		return false;
	}
	actions[actionName](message);
};

actions.goToTroubleShootingStep = function goToTroubleShootingStep(message)
{
    if(message.params.nickname && message.params.step ){
        
    studio.extension.storage.setItem("nickname",message.params.nickname);
    studio.extension.storage.setItem("step",message.params.step);
    
    
    studio.extension.registerTabPage("./index.html", './rsz_welcome.png');
    studio.extension.openPageInTab("./index.html", 'TroubleShooting Page', false);
    
    }
}
