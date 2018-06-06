<div ng-app="demoApp" ng-controller="demoController">
    <div style="display:none" mbsc-form>
        <div class="mbsc-align-center">
            <div class="mbsc-note mbsc-note-primary">The select can be used inside a mobiscroll form or on any element.</div>
        </div>
        <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Inside Mobiscroll Form</div>
            <label>
                Select
                <select ng-model="selVal" mobiscroll-select="settings">
                    <option ng-value="g.value" ng-repeat="g in items">{{ g.text }}</option>
                </select>
            </label>
            <label>
                Header text
                <select ng-model="selectVal" mobiscroll-select="headerSettings">
                    <option ng-value="g.value" ng-repeat="g in items">{{ g.text }}</option>
                </select>
            </label>
        </div>
        <div class="mbsc-form-group mbsc-padding">
            <p class="mbsc-thin">Use it on any element or non-mobiscroll form.</p>
        </div>
    </div>
    <div class="demo-container">
        <label for="demo-non-form">Select</label>
        <select id="demo-non-form" ng-model="selectedVal" mobiscroll-select="nonFormSettings">
            <option value="1">Atlanta</option>
            <option value="2">Berlin</option>
            <option value="3">Boston</option>
            <option value="4">Chicago</option>
            <option value="5">London</option>
            <option value="6">Los Angeles</option>
            <option value="7">New York</option>
            <option value="8">Paris</option>
            <option value="9">San Francisco</option>
        </select>
        <label for="demo-external">External button</label>
        <div class="external-container">
            <select id="demo-external" ng-model="external" mobiscroll-select="externalSettings" mobiscroll-instance="demoExternal">
                <option value="1">Atlanta</option>
                <option value="2">Berlin</option>
                <option value="3">Boston</option>
                <option value="4">Chicago</option>
                <option value="5">London</option>
                <option value="6">Los Angeles</option>
                <option value="7">New York</option>
                <option value="8">Paris</option>
                <option value="9">San Francisco</option>
            </select>
            <button ng-click="demoExternal.show()" class="external-button">Show</button>
        </div>
    </div>
</div>
