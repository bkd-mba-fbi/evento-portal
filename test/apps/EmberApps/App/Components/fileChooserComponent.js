define([
    'ember',
    'icons',
    'actionStack',
    'guiHelpers',
    'translate',
    'templates/components/fileChooserComponent',
    'components/fileInputComponent'
], function (ember, icons, actionStack, guiHelpers, translate) {
    ClxApp.FileChooserComponent = ember.Component.extend({
        tagName: 'span',
        classNames: ['fileChooser'],

        actions: {
            addFile: function () {
                var that = this;
                actionStack.registerWidgetState(function() {
                    that.set('showFileInput', true);
                }, function () {
                    that.set('chosenFile', undefined);
                    that.set('showFileInput', false);
                });
            },
            deleteFile: function () {
                if (this.get('onDelete'))
                    this.sendAction('onDelete');
                this.set('showFileInput', false);
            },
            cancelFile: function () {
                actionStack.clear(1, true);
                this.set('showFileInput', false);
            },
            confirmFile: function () {
                actionStack.clear(1, true);
                var selectedFile = this.get('chosenFile');
                if (!selectedFile)
                    return;
                if (this.get('onConfirm'))
                    this.sendAction('onConfirm', selectedFile, selectedFile.name);
                this.set('showFileInput', false);
            },
            chooseFile: function (files) {
                if (files)
                    this.send('cancelFile');
                
                if (this.get('onChoose'))
                    this.sendAction('onChoose', files[0]);
                this.set('chosenFile', files[0]);
                if (!this.get('showConfirmButton'))
                    this.send('confirmFile');
            },
            showModalFile: function() {
                var that = this;
                var dialog;
                var img = new Image();
                img.src = that.get('fileUrl');
                img.onload = function() {
                    dialog.overlayDialog('fitDialog');
                };
                var deleteFileButton = guiHelpers.getTextButton(icons.deleteFile, translate.getString('deleteFoto'));
                dialog = guiHelpers.openModalDialog(this.get('filename'),
                    function (body) {
                        var image = $(img);
                        body.append(image);
                        image.wrap('<div class="dialogBlock">');
                    },
                    function() {},
                    this.get('disabled') ? undefined : deleteFileButton,
                    function() {
                        that.send('deleteFile');
                    },
                    guiHelpers.getTextButton(icons.close, translate.getString('close')));
            }
        },

        fileChosen: function() {
            if (this.get('filename'))
                return true;
            return false;
        }.property('filename'),

        fileAccept: function() {
            var ext = this.getExtension();
            return ext ? '.' + ext : undefined;
        }.property('filename', 'extension'),

        fileIcon: function() {
            var ext = this.getExtension();
            if (!ext)
                return '';

            switch (ext.toUpperCase()) {
                case 'PDF':
                    return icons.pdf;
                case 'JPG':
                    this.set('showModal', true);
                    return icons.image;
                default:
                    return '';
            }
        }.property(),

        getExtension: function() {
            var filename = this.get('filename');
            if (filename && filename.indexOf('.') > 0) {//must have at least one dot
                var extArr = filename.split('.');
                if (extArr)
                    return extArr.pop();
            }
            var ext = this.get('extension');
            return ext;
        }
    });
});