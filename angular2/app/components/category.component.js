"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var categoryService_1 = require('../services/categoryService');
var CategoryComponent = (function () {
    function CategoryComponent(categoryService) {
        var _this = this;
        this.categoryService = categoryService;
        this.categoryService
            .getCategories().subscribe(function (categories) {
            _this.categories = categories;
        });
    }
    CategoryComponent.prototype.ngOnInit = function () {
        //   this.getPosts();
    };
    CategoryComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'categories',
            templateUrl: 'category.component.html',
            providers: [categoryService_1.CategoryService]
        }), 
        __metadata('design:paramtypes', [categoryService_1.CategoryService])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map