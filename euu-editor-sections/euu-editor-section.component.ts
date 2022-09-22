export class EuuEditorSectionsComponent {
  @Input() type: DialogTypeEnum;
  @Input() platform: PlatformEnum;
  builder: Type<any>;
  enduserUiDialog = {
    EndUserUIId: '0000000',
    message?: '',
    logo?: '',
    Parameters: [
        {Name: 'message', Value: '<b>asdasd</b>'},
        {Name: 'message', Value: '<b>asdasd</b>'},
        {Name: 'message', Value: '<b>asdasd</b>'},
        {Name: 'message', Value: '<b>asdasd</b>'},
        {Name: 'message', Value: '<b>asdasd</b>'},
    ],
    HtmlConent: ''
  }

  buildersMap = {
    [PlatformEnum.Win]: {
      [DialogTypeEnum.About]: EuuBuilderWinAboutComponent
      [DialogTypeEnum.Block]: EuuBuilderWinBlockComponent
    },
    [PlatformEnum.Mac]: {
      [DialogTypeEnum.About]: EuuBuilderMacAboutComponent
      [DialogTypeEnum.Block]: EuuBuilderMacBlockComponent
    },
    [PlatformEnum.Linux]: {
      [DialogTypeEnum.About]: EuuBuilderLinuxAboutComponent
    },
  }

  constructor(cfr: ComponentRef) {}

  ngOnChanges() {
    this.builder = this.buildersMap[this.type];
    const ref = this.cfr.CreateInstance(this.builder);
    ref.inputs = {

    }
  }


  ngOnDestroy() {
    this.ref.unsubscribe();
    this.ref.destroy();
  }

}