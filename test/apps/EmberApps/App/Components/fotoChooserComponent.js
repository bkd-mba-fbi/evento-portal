define([
    'jquery',
    'ember',
    'api',
    'icons',
    'actionStack',
    'guiHelpers',
    'arrayHelpers',
    'constants',
    'translate',
    'keyboard',
    'components/fileChooserComponent'
], function ($, ember, api, icons, actionStack, guiHelpers, arrayHelpers, constants, translate, keyboard) {
    ClxApp.FotoChooserComponent = ClxApp.FileChooserComponent.extend({
        tagName: 'span',
        classNames: ['fotoChooser'],
        layoutName: 'components/file-chooser',

        actions: {
            chooseFile: function (files) {
                var that = this;
                this.set('filename', 'Foto.jpg');

                api.ember.getConfigurations('foto')
                    .then(function (configs) {
                        var widths = $.grep(configs,
                            function(conf) {
                                return conf.Key === constants.idConfigurations.fotoWidth;
                            });
                        var heights = $.grep(configs,
                            function(conf) {
                                return conf.Key === constants.idConfigurations.fotoHeight;
                            });
                        that.initializeFotoEditor(files[0], {
                            width: widths[0].Value,
                            height: heights[0].Value
                        });
                    });
            }
        },

        initializeFotoEditor: function(file, fotoSize) {
            var that = this;

            // init rectangle
            var rectangle = {
                x: 0,
                y: 0,
                width: fotoSize.width,
                height: fotoSize.height
            };
            this.set('rectangle', rectangle);

            // add fotoFilterRectangle control to read colors and border thickness from css
            var fotoFilterRectangle = guiHelpers.getDiv('fotoFilterRectangle')
                .appendTo('body');
            this.set('filterColor', fotoFilterRectangle.css('background-color'));
            this.set('borderThickness', parseInt(fotoFilterRectangle.css('border-width').replace('px', '')));
            this.set('borderColor', fotoFilterRectangle.css('border-color'));
            this.set('errorColor', fotoFilterRectangle.css('color'));
            this.set('framerate', 60);
            this.set('maxZoom', 1.5);
            this.set('minZoom', 0.1);

            var canvasMaxSize = 800;

            // create file 
            var reader = new FileReader();
            var img = new Image();

            img.onload = function() {
                // scale image to container if necessary
                var zoomFactor = 1;
                if (img.width > canvasMaxSize)
                    zoomFactor = canvasMaxSize / img.width;
                else if (img.height > canvasMaxSize)
                    zoomFactor = canvasMaxSize / img.height;

                // round zoomFactor
                zoomFactor = zoomFactor * 10;
                zoomFactor = Math.round(zoomFactor);
                zoomFactor = zoomFactor / 10;

                var canvasHeight = Math.max(img.height * zoomFactor, rectangle.height);
                var canvasWidth = Math.max(img.width * zoomFactor, rectangle.width);

                that.set('canvasHeight', canvasHeight);
                that.set('canvasWidth', canvasWidth);
                that.set('zoomFactor', zoomFactor);
                that.set('image', img);

                var buttonFinish = guiHelpers.getTextButton(icons.save, translate.getString('save'));
                that.set('buttonFinish', buttonFinish);

                var dialog = guiHelpers.openModalDialog(translate.getString('addImage'),
                    function(body) {
                        that.fillFotoEditor(body, img);
                    },
                    function() {
                        that.set('filename', undefined);
                        that.send('cancelFile');
                    },
                    guiHelpers.getTextButton(icons.close, translate.getString('cancel')),
                    function () {
                        that.set('filename', undefined);
                        that.send('cancelFile');
                    },
                    buttonFinish,
                    function() {
                        that.saveImage();
                    });

                that.set('dialog', dialog);
                that.drawImage();
                that.drawFilter();
            }
            reader.onloadend = function() {
                img.src = reader.result;
            }
            reader.readAsDataURL(file);
        },

        fillFotoEditor: function(body, img) {
            var that = this;
            var canvasWidth = this.get('canvasWidth');
            var canvasHeight = this.get('canvasHeight');
            var framerate = this.get('framerate');

            // create buttons            
            var buttonZoomIn = guiHelpers.getButton(icons.plus)
                .mousedown(function() {
                    that.zoomImage(1);
                });
            var buttonZoomOut = guiHelpers.getButton(icons.minus)
                .mousedown(function() {
                    that.zoomImage(-1);
                });

            // get z-index of current overlay dialog
            var baseZIndex = guiHelpers.currentZIndex;
            // create canvas
            var errorCanvas = $('<canvas width="' + canvasWidth + '" height="' + canvasHeight + '">');
            errorCanvas
                .css({ 'position': 'absolute', 'z-index': baseZIndex + 1 });

            var imageCanvas = $('<canvas width="' + canvasWidth + '" height="' + canvasHeight + '">');
            imageCanvas
                .css({ 'position': 'absolute', 'z-index': baseZIndex + 5 });

            var filterCanvas = $('<canvas width="' + canvasWidth + '" height="' + canvasHeight + '">');
            filterCanvas
                .css({ 'position': 'absolute', 'z-index': baseZIndex + 10, 'cursor': 'move' });

            filterCanvas.mousedown(function(e) {
                that.set('cursorPosition',
                {
                    x: e.pageX,
                    y: e.pageY
                });
                that.set('isDragging', true);
                that.set('updateIntervalId',
                    setInterval(function() {
                        that.drawFilter();
                    },
                        1000 / framerate));
            });
            $(document)
                .mouseup(function () {
                    try {
                        clearInterval(that.get('updateIntervalId'));
                        that.set('isDragging', false);
                    }
                    catch(ex){}
                });
            filterCanvas
                .mousemove(function(e) {
                    if (that.get('isDragging')) {
                        var cursorPosition = that.get('cursorPosition');
                        var rectangle = that.get('rectangle');
                        var deltaX = e.pageX - cursorPosition.x;
                        var deltaY = e.pageY - cursorPosition.y;

                        rectangle.x += deltaX;
                        rectangle.y += deltaY;

                        that.fitRectangle();

                        that.set('cursorPosition',
                        {
                            x: e.pageX,
                            y: e.pageY
                        });
                    }
                });

            // set container content
            guiHelpers.getElement('h4',
                    undefined,
                    undefined,
                    that.get('filename') + ' (' + img.width + 'x' + img.height + ')')
                .appendTo(body);

            var toolbar = guiHelpers.getDiv('dialogToolbar')
            .appendTo(body);
            toolbar.append(guiHelpers.getDiv(undefined, 'Zoom'));
            toolbar.append(buttonZoomIn);
            toolbar.append(buttonZoomOut);
            buttonZoomIn.wrap('<div>');
            buttonZoomOut.wrap('<div>');
            var editorInfo = guiHelpers.getDiv();
            toolbar.append(editorInfo);

            var scrollableDiv = guiHelpers.getDiv()
                .css('overflow', 'auto')
                .appendTo(body);

            var imageContainer = guiHelpers.getDiv()
                .css({
                    'height': canvasHeight + 'px',
                    'width': canvasWidth + 'px'
                })
                .appendTo(scrollableDiv);
            imageContainer.append(errorCanvas);
            imageContainer.append(imageCanvas);
            imageContainer.append(filterCanvas);

            // save all controls
            that.set('editorInfo', editorInfo);
            that.set('imageContainer', imageContainer);
            that.set('scrollableDiv', scrollableDiv);
            that.set('errorCanvas', errorCanvas);
            that.set('imageCanvas', imageCanvas);
            that.set('filterCanvas', filterCanvas);
            that.set('buttonZoomIn', buttonZoomIn);
            that.set('buttonZoomOut', buttonZoomOut);

            that.updateGui();

        },

        fitRectangle: function () {
            var rectangle = this.get('rectangle');
            if (rectangle.x < 0)
                rectangle.x = 0;
            if (rectangle.y < 0)
                rectangle.y = 0;

            var canvasWidth = this.get('canvasWidth');
            var canvasHeight = this.get('canvasHeight');

            if (rectangle.x + rectangle.width > canvasWidth)
                rectangle.x = canvasWidth - rectangle.width;
            if (rectangle.y + rectangle.height > canvasHeight)
                rectangle.y = canvasHeight - rectangle.height;
        },

        updateGui: function () {
            var that = this;
            var rectangle = this.get('rectangle');
            var zoomFactor = this.get('zoomFactor');
            var img = this.get('image');
            var buttonFinish = this.get('buttonFinish');
            var imageContainer = this.get('imageContainer');

            var width = img.width * zoomFactor;
            var height = img.height * zoomFactor;

            var widthHtml = Math.round(width);
            var heightHtml = Math.round(height);

            buttonFinish.prop('disabled', false);
            if (width < rectangle.width) {
                widthHtml = '<span class="error">' + widthHtml + '</span>';
                buttonFinish.prop('disabled', true);
            }
            if (height < rectangle.height) {
                heightHtml = '<span class="error">' + heightHtml + '</span>';
                buttonFinish.prop('disabled', true);
            }

            imageContainer.css({
                'height': this.get('canvasHeight') + 'px',
                'width': this.get('canvasWidth') + 'px',
                'position': 'relative'
            });

            var buttonZoomIn = this.get('buttonZoomIn')
                .prop('disabled', false);
            var buttonZoomOut = this.get('buttonZoomOut')
                .prop('disabled', false);
            if (zoomFactor === this.get('maxZoom'))
                buttonZoomIn.prop('disabled', true);
            if (zoomFactor === this.get('minZoom'))
                buttonZoomOut.prop('disabled', true);

            this.get('editorInfo')
                .html(rectangle.width + 'x' + rectangle.height + ' (' + widthHtml + 'x' + heightHtml + ')');

            if (this.get('timeoutId'))
                clearTimeout(this.get('timeoutId'));

            var timeoutId = setTimeout(function() {
                that.get('dialog').overlayDialog('fitDialog', that.get('scrollableDiv'));
            }, 1000);
            this.set('timeoutId', timeoutId);
        },

        zoomImage: function (factor) {
            var zoomFactor = this.get('zoomFactor');
            var img = this.get('image');
            var rectangle = this.get('rectangle');
            var rectangle = this.get('rectangle');
            var zoomFactorIncrement = 0.1;
            if (zoomFactor < 0.6 && factor < 0)
                zoomFactorIncrement = 0.025;
            else if (zoomFactor < 1 && factor < 0)
                zoomFactorIncrement = 0.05;
            else if (zoomFactor < 0.575 && factor > 0)
                zoomFactorIncrement = 0.025;
            else if (zoomFactor < 0.875 && factor > 0)
                zoomFactorIncrement = 0.05;
            this.set('zoomFactorIncrement', zoomFactorIncrement);

            factor = zoomFactorIncrement * factor;
            zoomFactor += factor;
            if (zoomFactor > this.get('maxZoom'))
                zoomFactor = this.get('maxZoom');
            if (zoomFactor < this.get('minZoom'))
                zoomFactor = this.get('minZoom');

            // correct cavas sizes
            var canvasHeight = Math.max(img.height * zoomFactor, rectangle.height);
            var canvasWidth = Math.max(img.width * zoomFactor, rectangle.width);

            this.get('errorCanvas').attr({
                width: canvasWidth,
                height: canvasHeight
            });
            this.get('imageCanvas').attr({
                width: canvasWidth,
                height: canvasHeight
            });
            this.get('filterCanvas').attr({
                width: canvasWidth,
                height: canvasHeight
            });

            this.set('zoomFactor', zoomFactor);
            this.set('canvasHeight', canvasHeight);
            this.set('canvasWidth', canvasWidth);

            this.fitRectangle();
            this.updateGui();
            this.drawImage();
            this.drawFilter();
        },

        drawImage: function () {
            var ctx = this.get('imageCanvas').get(0).getContext('2d');
            var img = this.get('image');
            var width = img.width * this.get('zoomFactor');
            var height = img.height * this.get('zoomFactor');
            var x = (ctx.canvas.width - width) / 2;
            var y = (ctx.canvas.height - height) / 2;

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.drawImage(img, x, y, width, height);
        },

        drawFilter: function () {
            var rectangle = this.get('rectangle');
            // draw error red color behind everything
            var ctxError = this.get('errorCanvas').get(0).getContext('2d');
            ctxError.clearRect(0, 0, ctxError.canvas.width, ctxError.canvas.height);
            ctxError.fillStyle = this.get('errorColor');
            ctxError.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            // draw filter over image
            var ctx = this.get('filterCanvas').get(0).getContext('2d');
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = this.get('filterColor');
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.clearRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
            ctx.strokeStyle = this.get('borderColor');
            ctx.lineWidth = this.get('borderThickness');
            ctx.strokeRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
        },

        saveImage: function () {
            var imageCanvas = this.get('imageCanvas');
            var ctx = imageCanvas.get(0).getContext('2d');
            var rectangle = this.get('rectangle');
            var img = this.get('image');

            var width = img.width * this.get('zoomFactor');
            var height = img.height * this.get('zoomFactor');
            // position before resizing canvas - offset of movable rectangle
            var x = (ctx.canvas.width - width) / 2 - rectangle.x;
            var y = (ctx.canvas.height - height) / 2 - rectangle.y;

            // clear and resize canvas
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            imageCanvas.attr('width', rectangle.width);
            imageCanvas.attr('height', rectangle.height);

            // draw final image 
            ctx = imageCanvas.get(0).getContext('2d');
            ctx.drawImage(img, x, y, width, height);

            var base64 = imageCanvas.get(0).toDataURL('image/jpeg', 0.8).replace('data:image/jpeg;base64,', '');
            if (this.get('onConfirm'))
                this.sendAction('onConfirm', arrayHelpers.base64ToArrayBuffer(base64), this.get('filename'));
        }
    });
});