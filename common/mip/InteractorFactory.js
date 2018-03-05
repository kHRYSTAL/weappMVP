import eventbus from '../notification/notification';
import toast from '../view/toast';
import alert from '../view/alert';
import page from '../view/page';
import storage from '../persistence/storage.js';
import tracker from '../tracker/tracker.js';

function createInteractor(interactor, view, model) {
    var instance = new interactor();
    instance.view = view;
    instance.model = model;
    // inject common view
    injectCommonView(instance);
    return instance;
}

function injectCommonView(instance) {
    instance.eventbus = eventbus;
    instance.alert = alert;
    instance.toast = toast;
    instance.app = app;
    instance.page = page;
    instance.storage = storage;
    instance.tracker = new tracker();
}

module.exports = {
    createInteractor: createInteractor
};