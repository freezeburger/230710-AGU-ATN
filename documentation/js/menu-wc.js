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
                                            'data-bs-target="#components-links-module-AppModule-deca1a244cca01d7a99fa2629fb2b2128d0d19cc9fe6be7bf9afc40fcb75defc55ef9c91df423842b354df8ae3f0352681114f4171a27e2faef32be34efc2e1d"' : 'data-bs-target="#xs-components-links-module-AppModule-deca1a244cca01d7a99fa2629fb2b2128d0d19cc9fe6be7bf9afc40fcb75defc55ef9c91df423842b354df8ae3f0352681114f4171a27e2faef32be34efc2e1d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-deca1a244cca01d7a99fa2629fb2b2128d0d19cc9fe6be7bf9afc40fcb75defc55ef9c91df423842b354df8ae3f0352681114f4171a27e2faef32be34efc2e1d"' :
                                            'id="xs-components-links-module-AppModule-deca1a244cca01d7a99fa2629fb2b2128d0d19cc9fe6be7bf9afc40fcb75defc55ef9c91df423842b354df8ae3f0352681114f4171a27e2faef32be34efc2e1d"' }>
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
                                <a href="modules/ViewAuthModule.html" data-type="entity-link" >ViewAuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ViewAuthModule-006103f5bca2459ad4086813507b09d23926af7688d2faec23867fcc31d100485ea0a8421841f7084d9a67ac320dfd75e3d218a57a397142c6f83f0dbbf42d33"' : 'data-bs-target="#xs-components-links-module-ViewAuthModule-006103f5bca2459ad4086813507b09d23926af7688d2faec23867fcc31d100485ea0a8421841f7084d9a67ac320dfd75e3d218a57a397142c6f83f0dbbf42d33"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewAuthModule-006103f5bca2459ad4086813507b09d23926af7688d2faec23867fcc31d100485ea0a8421841f7084d9a67ac320dfd75e3d218a57a397142c6f83f0dbbf42d33"' :
                                            'id="xs-components-links-module-ViewAuthModule-006103f5bca2459ad4086813507b09d23926af7688d2faec23867fcc31d100485ea0a8421841f7084d9a67ac320dfd75e3d218a57a397142c6f83f0dbbf42d33"' }>
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
                                            'data-bs-target="#components-links-module-ViewMessagesModule-719f8a98379ad93a65cd111ed27d25f2a108bdebadce5daec8c4e5a4916039dbc846186e5326b7694db07d78f673e6b5f78153218e99d33cb096b92cfc94c51c"' : 'data-bs-target="#xs-components-links-module-ViewMessagesModule-719f8a98379ad93a65cd111ed27d25f2a108bdebadce5daec8c4e5a4916039dbc846186e5326b7694db07d78f673e6b5f78153218e99d33cb096b92cfc94c51c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewMessagesModule-719f8a98379ad93a65cd111ed27d25f2a108bdebadce5daec8c4e5a4916039dbc846186e5326b7694db07d78f673e6b5f78153218e99d33cb096b92cfc94c51c"' :
                                            'id="xs-components-links-module-ViewMessagesModule-719f8a98379ad93a65cd111ed27d25f2a108bdebadce5daec8c4e5a4916039dbc846186e5326b7694db07d78f673e6b5f78153218e99d33cb096b92cfc94c51c"' }>
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
                                            'data-bs-target="#components-links-module-ViewNotificationModule-67d6f2a0f257a546e37031fd9e1a8ba18bea0fb63523045146b7300f616546ed7922046629a6715f56e099871b89c4ff75820d277dc548378b63158124995d02"' : 'data-bs-target="#xs-components-links-module-ViewNotificationModule-67d6f2a0f257a546e37031fd9e1a8ba18bea0fb63523045146b7300f616546ed7922046629a6715f56e099871b89c4ff75820d277dc548378b63158124995d02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewNotificationModule-67d6f2a0f257a546e37031fd9e1a8ba18bea0fb63523045146b7300f616546ed7922046629a6715f56e099871b89c4ff75820d277dc548378b63158124995d02"' :
                                            'id="xs-components-links-module-ViewNotificationModule-67d6f2a0f257a546e37031fd9e1a8ba18bea0fb63523045146b7300f616546ed7922046629a6715f56e099871b89c4ff75820d277dc548378b63158124995d02"' }>
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
                                            'data-bs-target="#components-links-module-ViewProductModule-4205743f3f9b2add57e0f7ec289df45ebffa554ce870e196f90643b42eb86a503d3c08d91f12aa3c81cf026fc378f72fee94e0b218e6e02017f0a5db8f599603"' : 'data-bs-target="#xs-components-links-module-ViewProductModule-4205743f3f9b2add57e0f7ec289df45ebffa554ce870e196f90643b42eb86a503d3c08d91f12aa3c81cf026fc378f72fee94e0b218e6e02017f0a5db8f599603"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ViewProductModule-4205743f3f9b2add57e0f7ec289df45ebffa554ce870e196f90643b42eb86a503d3c08d91f12aa3c81cf026fc378f72fee94e0b218e6e02017f0a5db8f599603"' :
                                            'id="xs-components-links-module-ViewProductModule-4205743f3f9b2add57e0f7ec289df45ebffa554ce870e196f90643b42eb86a503d3c08d91f12aa3c81cf026fc378f72fee94e0b218e6e02017f0a5db8f599603"' }>
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