'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">230710-agu-atn documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-96d3722e14417ac7864c8f141ac91ce211cb0a87683e62b5156bd6a281c4ef6ca7080f9c099981807188e7aecb50c19a35f9c44c73816cff3a8ee6c13ff5a74e"' : 'data-bs-target="#xs-components-links-module-AppModule-96d3722e14417ac7864c8f141ac91ce211cb0a87683e62b5156bd6a281c4ef6ca7080f9c099981807188e7aecb50c19a35f9c44c73816cff3a8ee6c13ff5a74e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-96d3722e14417ac7864c8f141ac91ce211cb0a87683e62b5156bd6a281c4ef6ca7080f9c099981807188e7aecb50c19a35f9c44c73816cff3a8ee6c13ff5a74e"' :
                                            'id="xs-components-links-module-AppModule-96d3722e14417ac7864c8f141ac91ce211cb0a87683e62b5156bd6a281c4ef6ca7080f9c099981807188e7aecb50c19a35f9c44c73816cff3a8ee6c13ff5a74e"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LayoutModule-1f3819476aea40c5b71a878452aec4cc46d4e1b452f8245590572d4b6c0b807c01f5194398be26194ebc3445eee7f397a4e1db59cd72216a2f56dd7911cbdc51"' : 'data-bs-target="#xs-components-links-module-LayoutModule-1f3819476aea40c5b71a878452aec4cc46d4e1b452f8245590572d4b6c0b807c01f5194398be26194ebc3445eee7f397a4e1db59cd72216a2f56dd7911cbdc51"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-1f3819476aea40c5b71a878452aec4cc46d4e1b452f8245590572d4b6c0b807c01f5194398be26194ebc3445eee7f397a4e1db59cd72216a2f56dd7911cbdc51"' :
                                            'id="xs-components-links-module-LayoutModule-1f3819476aea40c5b71a878452aec4cc46d4e1b452f8245590572d4b6c0b807c01f5194398be26194ebc3445eee7f397a4e1db59cd72216a2f56dd7911cbdc51"' }>
                                            <li class="link">
                                                <a href="components/LayoutSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutSidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-LayoutModule-1f3819476aea40c5b71a878452aec4cc46d4e1b452f8245590572d4b6c0b807c01f5194398be26194ebc3445eee7f397a4e1db59cd72216a2f56dd7911cbdc51"' : 'data-bs-target="#xs-directives-links-module-LayoutModule-1f3819476aea40c5b71a878452aec4cc46d4e1b452f8245590572d4b6c0b807c01f5194398be26194ebc3445eee7f397a4e1db59cd72216a2f56dd7911cbdc51"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-LayoutModule-1f3819476aea40c5b71a878452aec4cc46d4e1b452f8245590572d4b6c0b807c01f5194398be26194ebc3445eee7f397a4e1db59cd72216a2f56dd7911cbdc51"' :
                                        'id="xs-directives-links-module-LayoutModule-1f3819476aea40c5b71a878452aec4cc46d4e1b452f8245590572d4b6c0b807c01f5194398be26194ebc3445eee7f397a4e1db59cd72216a2f56dd7911cbdc51"' }>
                                        <li class="link">
                                            <a href="directives/LayoutContentDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutContentDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/LayoutMenuDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutMenuDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgImportModule.html" data-type="entity-link" >NgImportModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-UiModule-20f1711c32f951c25da245563a222280a5e641bc0571390f7e27180027032707bc22f7059ac6fb5105b7b0b5702fc7a00f3253c437123b7c2ffd621ef9cabf07"' : 'data-bs-target="#xs-components-links-module-UiModule-20f1711c32f951c25da245563a222280a5e641bc0571390f7e27180027032707bc22f7059ac6fb5105b7b0b5702fc7a00f3253c437123b7c2ffd621ef9cabf07"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-20f1711c32f951c25da245563a222280a5e641bc0571390f7e27180027032707bc22f7059ac6fb5105b7b0b5702fc7a00f3253c437123b7c2ffd621ef9cabf07"' :
                                            'id="xs-components-links-module-UiModule-20f1711c32f951c25da245563a222280a5e641bc0571390f7e27180027032707bc22f7059ac6fb5105b7b0b5702fc7a00f3253c437123b7c2ffd621ef9cabf07"' }>
                                            <li class="link">
                                                <a href="components/UiAppbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiAppbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UiProductCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiProductCardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewAuthModule.html" data-type="entity-link" >ViewAuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewAuthModule-a915b1d268e9550a60596389fe9997d027fa5a5f4ca6f5e55a13120bc04a398c3d1ee4b900e298b6576a04f239d89b11fff5cbb70edf5b9eb2189f1a6404d2f5"' : 'data-bs-target="#xs-components-links-module-ViewAuthModule-a915b1d268e9550a60596389fe9997d027fa5a5f4ca6f5e55a13120bc04a398c3d1ee4b900e298b6576a04f239d89b11fff5cbb70edf5b9eb2189f1a6404d2f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewAuthModule-a915b1d268e9550a60596389fe9997d027fa5a5f4ca6f5e55a13120bc04a398c3d1ee4b900e298b6576a04f239d89b11fff5cbb70edf5b9eb2189f1a6404d2f5"' :
                                            'id="xs-components-links-module-ViewAuthModule-a915b1d268e9550a60596389fe9997d027fa5a5f4ca6f5e55a13120bc04a398c3d1ee4b900e298b6576a04f239d89b11fff5cbb70edf5b9eb2189f1a6404d2f5"' }>
                                            <li class="link">
                                                <a href="components/ViewAuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewAuthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewAuthRoutingModule.html" data-type="entity-link" >ViewAuthRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewMessagesModule.html" data-type="entity-link" >ViewMessagesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewMessagesModule-98be44fd23f75d64e274cd1fb55627873c030a401741fc83c301d5bac5f6caa769ebcf3cf3905c26d113dd84393fd1a1ee9b50cb8f74a0360cb9c71a5543032c"' : 'data-bs-target="#xs-components-links-module-ViewMessagesModule-98be44fd23f75d64e274cd1fb55627873c030a401741fc83c301d5bac5f6caa769ebcf3cf3905c26d113dd84393fd1a1ee9b50cb8f74a0360cb9c71a5543032c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewMessagesModule-98be44fd23f75d64e274cd1fb55627873c030a401741fc83c301d5bac5f6caa769ebcf3cf3905c26d113dd84393fd1a1ee9b50cb8f74a0360cb9c71a5543032c"' :
                                            'id="xs-components-links-module-ViewMessagesModule-98be44fd23f75d64e274cd1fb55627873c030a401741fc83c301d5bac5f6caa769ebcf3cf3905c26d113dd84393fd1a1ee9b50cb8f74a0360cb9c71a5543032c"' }>
                                            <li class="link">
                                                <a href="components/ViewMessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewMessagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewMessagesRoutingModule.html" data-type="entity-link" >ViewMessagesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewNotificationModule.html" data-type="entity-link" >ViewNotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewNotificationModule-e467f745ad52247ca0e7fda90f96c8f761238a1e7f8ef26f9693db40aee6d6d15acc54049e485ced832746f4578e0ffddbf2e6197622e80f114bacfda7c77a89"' : 'data-bs-target="#xs-components-links-module-ViewNotificationModule-e467f745ad52247ca0e7fda90f96c8f761238a1e7f8ef26f9693db40aee6d6d15acc54049e485ced832746f4578e0ffddbf2e6197622e80f114bacfda7c77a89"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewNotificationModule-e467f745ad52247ca0e7fda90f96c8f761238a1e7f8ef26f9693db40aee6d6d15acc54049e485ced832746f4578e0ffddbf2e6197622e80f114bacfda7c77a89"' :
                                            'id="xs-components-links-module-ViewNotificationModule-e467f745ad52247ca0e7fda90f96c8f761238a1e7f8ef26f9693db40aee6d6d15acc54049e485ced832746f4578e0ffddbf2e6197622e80f114bacfda7c77a89"' }>
                                            <li class="link">
                                                <a href="components/ViewNotificationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewNotificationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewNotificationRoutingModule.html" data-type="entity-link" >ViewNotificationRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ViewProductModule.html" data-type="entity-link" >ViewProductModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewProductModule-0afa14dc99afba04be71b80abadae86c002cdd8dd18330ebadf2705b2f946dacb2363579d94771983140cc274453a40069eaadbef9a7e0568671d6f2f53b19dd"' : 'data-bs-target="#xs-components-links-module-ViewProductModule-0afa14dc99afba04be71b80abadae86c002cdd8dd18330ebadf2705b2f946dacb2363579d94771983140cc274453a40069eaadbef9a7e0568671d6f2f53b19dd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewProductModule-0afa14dc99afba04be71b80abadae86c002cdd8dd18330ebadf2705b2f946dacb2363579d94771983140cc274453a40069eaadbef9a7e0568671d6f2f53b19dd"' :
                                            'id="xs-components-links-module-ViewProductModule-0afa14dc99afba04be71b80abadae86c002cdd8dd18330ebadf2705b2f946dacb2363579d94771983140cc274453a40069eaadbef9a7e0568671d6f2f53b19dd"' }>
                                            <li class="link">
                                                <a href="components/ViewProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewProductComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ViewProductRoutingModule.html" data-type="entity-link" >ViewProductRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessagesService.html" data-type="entity-link" >MessagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MessagesService-1.html" data-type="entity-link" >MessagesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProductService.html" data-type="entity-link" >ProductService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Product.html" data-type="entity-link" >Product</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProductResponse.html" data-type="entity-link" >ProductResponse</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});