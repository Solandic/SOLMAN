import {a as lr} from "./chunk-XKR2L4OR.mjs";
import "./chunk-42U43NKG.mjs";
import {A as Tr, B as _r, C as Nr, H as Oe, J as ve, K as de, M as y, P as he, R as Se, S as Te, U as Br, V as H, W as Z, X as _e, Y as Mr, Z as Dr, _ as k, aa as f, b as Xe, c as t, d as tr, da as oe, f as ar, g as ce, ha as zr, i as Pr, ia as Er, j as Ar, ja as Gr, k as be, ka as ir, l as Re, la as d, m as Xr, n as Q, na as ie, o as X, oa as Ne, p as Le, pa as Be, q as me, qa as Me, r as e, s, t as nr, u as or, v as C, w as ne, x as Rr, y as Lr, z as Or} from "./chunk-VNLYU6PN.mjs";
import {c as I} from "./chunk-ELYU6EKT.mjs";
var vt = {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};
var St = {
    ...vt,
    borderRadius: 6,
    background: "rgba(149, 149, 149, 0.1)",
    border: "1px dashed rgba(149, 149, 149, 0.15)",
    color: "#a5a5a5",
    flexDirection: "column"
}
  , Wr = ce( (r, a) => e("div", {
    style: St,
    ref: a
}));
var Ct = r => r, sr, Vr = r => (sr || (sr = Ct(r.createElement("path", {
    d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
}), "Home")),
sr);
var Ur = {
    onClick: {
        type: y.EventHandler
    },
    onMouseDown: {
        type: y.EventHandler
    },
    onMouseUp: {
        type: y.EventHandler
    },
    onMouseEnter: {
        type: y.EventHandler
    },
    onMouseLeave: {
        type: y.EventHandler
    }
}
  , jr = (r, a) => r.find(n => n.toLowerCase().includes(a));
function Hr(r, a, n="", o, l) {
    if (a)
        return o;
    if (n == null || n?.length === 0)
        return null;
    let c = n.toLowerCase().replace(/-|\s/g, "");
    var m;
    return (m = l[c]) !== null && m !== void 0 ? m : jr(r, c)
}
function Zr(r, a, n="", o, l) {
    let c = Q( () => {
        if (n == null || n?.length === 0)
            return null;
        let x = n.toLowerCase().replace(/-|\s/g, "");
        var g;
        return (g = l[x]) !== null && g !== void 0 ? g : jr(r, x)
    }
    , [o, n]);
    return a ? o : c
}
var It = "https://framer.com/m/material-icons/"
  , De = {
    AcUnit: 15,
    AccessAlarm: 15,
    AccessAlarms: 15,
    AccessTime: 15,
    AccessTimeFilled: 0,
    Accessibility: 7,
    AccessibilityNew: 0,
    Accessible: 15,
    AccessibleForward: 0,
    AccountBalance: 2,
    AccountBalanceWallet: 0,
    AccountBox: 15,
    AccountCircle: 7,
    AccountTree: 15,
    AdUnits: 15,
    Adb: 15,
    Add: 15,
    AddAPhoto: 15,
    AddAlarm: 15,
    AddAlert: 15,
    AddBox: 15,
    AddBusiness: 15,
    AddCircle: 15,
    AddCircleOutline: 0,
    AddComment: 15,
    AddIcCall: 15,
    AddLink: 15,
    AddLocation: 15,
    AddLocationAlt: 2,
    AddModerator: 15,
    AddPhotoAlternate: 0,
    AddReaction: 15,
    AddRoad: 15,
    AddShoppingCart: 2,
    AddTask: 15,
    AddToDrive: 15,
    AddToHomeScreen: 2,
    AddToPhotos: 15,
    AddToQueue: 15,
    Addchart: 15,
    Adjust: 15,
    AdminPanelSettings: 0,
    Agriculture: 15,
    Air: 15,
    AirlineSeatFlat: 2,
    AirplaneTicket: 2,
    AirplanemodeActive: 0,
    AirplanemodeInactive: 0,
    Airplay: 15,
    AirportShuttle: 2,
    Alarm: 15,
    AlarmAdd: 15,
    AlarmOff: 15,
    AlarmOn: 15,
    Album: 15,
    AlignHorizontalLeft: 0,
    AlignHorizontalRight: 0,
    AlignVerticalBottom: 0,
    AlignVerticalCenter: 0,
    AlignVerticalTop: 0,
    AllInbox: 15,
    AllInclusive: 15,
    AllOut: 15,
    AltRoute: 15,
    AlternateEmail: 2,
    Analytics: 15,
    Anchor: 15,
    Android: 15,
    Animation: 15,
    Announcement: 15,
    Aod: 15,
    Apartment: 15,
    Api: 15,
    AppBlocking: 15,
    AppRegistration: 2,
    AppSettingsAlt: 2,
    Apple: 0,
    Approval: 15,
    Apps: 15,
    Architecture: 15,
    Archive: 15,
    ArrowBack: 15,
    ArrowBackIos: 15,
    ArrowBackIosNew: 2,
    ArrowCircleDown: 2,
    ArrowCircleUp: 7,
    ArrowDownward: 7,
    ArrowDropDown: 7,
    ArrowDropDownCircle: 0,
    ArrowDropUp: 15,
    ArrowForward: 15,
    ArrowForwardIos: 2,
    ArrowLeft: 15,
    ArrowRight: 15,
    ArrowRightAlt: 7,
    ArrowUpward: 15,
    ArtTrack: 15,
    Article: 15,
    AspectRatio: 15,
    Assessment: 15,
    Assignment: 15,
    AssignmentInd: 7,
    AssignmentLate: 2,
    AssignmentReturn: 0,
    AssignmentReturned: 0,
    AssignmentTurnedIn: 0,
    Assistant: 15,
    AssistantDirection: 0,
    AssistantPhoto: 2,
    Atm: 15,
    AttachEmail: 15,
    AttachFile: 15,
    AttachMoney: 15,
    Attachment: 15,
    Attractions: 15,
    Attribution: 15,
    Audiotrack: 15,
    AutoAwesome: 15,
    AutoAwesomeMosaic: 0,
    AutoAwesomeMotion: 0,
    AutoDelete: 15,
    AutoFixHigh: 15,
    AutoFixNormal: 7,
    AutoFixOff: 15,
    AutoGraph: 15,
    AutoStories: 15,
    AutofpsSelect: 7,
    Autorenew: 15,
    AvTimer: 15,
    BabyChangingStation: 0,
    Backpack: 15,
    Backspace: 15,
    Backup: 15,
    BackupTable: 15,
    Badge: 15,
    BakeryDining: 15,
    Balcony: 15,
    Ballot: 15,
    BarChart: 15,
    BatchPrediction: 2,
    Bathroom: 15,
    Bathtub: 15,
    Battery20: 15,
    Battery30: 15,
    Battery50: 15,
    Battery60: 15,
    Battery80: 15,
    Battery90: 15,
    BatteryAlert: 15,
    BatteryCharging20: 0,
    BatteryCharging30: 0,
    BatteryCharging50: 0,
    BatteryCharging60: 0,
    BatteryCharging80: 0,
    BatteryCharging90: 0,
    BatteryChargingFull: 0,
    BatteryFull: 15,
    BatterySaver: 15,
    BatteryStd: 15,
    BatteryUnknown: 2,
    BeachAccess: 15,
    Bed: 15,
    BedroomBaby: 15,
    BedroomChild: 15,
    BedroomParent: 7,
    Bedtime: 15,
    Beenhere: 15,
    Bento: 15,
    BikeScooter: 15,
    Biotech: 15,
    Blender: 15,
    Block: 15,
    Bloodtype: 15,
    Bluetooth: 15,
    BluetoothAudio: 2,
    BluetoothConnected: 0,
    BluetoothDisabled: 0,
    BluetoothDrive: 2,
    BluetoothSearching: 0,
    BlurCircular: 15,
    BlurLinear: 15,
    BlurOff: 15,
    BlurOn: 15,
    Bolt: 15,
    Book: 15,
    BookOnline: 15,
    Bookmark: 15,
    BookmarkAdd: 15,
    BookmarkAdded: 7,
    BookmarkBorder: 2,
    BookmarkRemove: 2,
    Bookmarks: 15,
    BorderAll: 15,
    BorderBottom: 15,
    BorderClear: 15,
    BorderColor: 15,
    BorderHorizontal: 0,
    BorderInner: 15,
    BorderLeft: 15,
    BorderOuter: 15,
    BorderRight: 15,
    BorderStyle: 15,
    BorderTop: 15,
    BorderVertical: 2,
    BrandingWatermark: 0,
    BreakfastDining: 2,
    Brightness1: 15,
    Brightness2: 15,
    Brightness3: 15,
    Brightness4: 15,
    Brightness5: 15,
    Brightness6: 15,
    Brightness7: 15,
    BrightnessAuto: 2,
    BrightnessHigh: 2,
    BrightnessLow: 7,
    BrightnessMedium: 0,
    BrokenImage: 15,
    BrowserNotSupported: 0,
    BrunchDining: 15,
    Brush: 15,
    BubbleChart: 15,
    BugReport: 15,
    Build: 15,
    BuildCircle: 15,
    Bungalow: 15,
    BurstMode: 15,
    BusAlert: 15,
    Business: 15,
    BusinessCenter: 2,
    Cabin: 15,
    Cable: 15,
    Cached: 15,
    Cake: 15,
    Calculate: 15,
    CalendarToday: 7,
    CalendarViewDay: 2,
    CalendarViewMonth: 0,
    CalendarViewWeek: 0,
    Call: 15,
    CallEnd: 15,
    CallMade: 15,
    CallMerge: 15,
    CallMissed: 15,
    CallMissedOutgoing: 0,
    CallReceived: 15,
    CallSplit: 15,
    CallToAction: 15,
    Camera: 15,
    CameraAlt: 15,
    CameraEnhance: 7,
    CameraFront: 15,
    CameraIndoor: 15,
    CameraOutdoor: 7,
    CameraRear: 15,
    CameraRoll: 15,
    Cameraswitch: 15,
    Campaign: 15,
    Cancel: 15,
    CancelPresentation: 0,
    CancelScheduleSend: 0,
    CarRental: 15,
    CarRepair: 15,
    CardGiftcard: 15,
    CardMembership: 2,
    CardTravel: 15,
    Carpenter: 15,
    Cases: 15,
    Casino: 15,
    Cast: 15,
    CastConnected: 7,
    CastForEducation: 0,
    CatchingPokemon: 2,
    Category: 15,
    Celebration: 15,
    CellWifi: 15,
    CenterFocusSSUIg: 0,
    CenterFocusWeak: 2,
    Chair: 15,
    ChairAlt: 15,
    Chalet: 15,
    ChangeCircle: 15,
    ChangeHistory: 7,
    ChargingStation: 2,
    Chat: 15,
    ChatBubble: 15,
    ChatBubbleOutline: 0,
    Check: 15,
    CheckBox: 15,
    CheckBoxOutlineBlank: 0,
    CheckCircle: 15,
    CheckCircleOutline: 0,
    Checkroom: 15,
    ChevronLeft: 15,
    ChevronRight: 15,
    ChildCare: 15,
    ChildFriendly: 7,
    ChromeReaderMode: 0,
    Circle: 15,
    CircleNotifications: 0,
    Class: 15,
    CleanHands: 15,
    CleaningServices: 0,
    Clear: 15,
    ClearAll: 15,
    Close: 15,
    CloseFullscreen: 2,
    ClosedCaption: 7,
    ClosedCaptionOff: 0,
    Cloud: 15,
    CloudCircle: 15,
    CloudDone: 15,
    CloudDownload: 7,
    CloudOff: 15,
    CloudQueue: 15,
    CloudUpload: 15,
    Code: 15,
    CodeOff: 15,
    Coffee: 15,
    CoffeeMaker: 15,
    Collections: 15,
    CollectionsBookmark: 0,
    ColorLens: 15,
    Colorize: 15,
    Comment: 15,
    CommentBank: 15,
    Commute: 15,
    Compare: 15,
    CompareArrows: 7,
    CompassCalibration: 0,
    Compress: 15,
    Computer: 15,
    ConfirmationNumber: 0,
    ConnectedTv: 15,
    Construction: 15,
    ContactMail: 15,
    ContactPage: 15,
    ContactPhone: 15,
    ContactSupport: 2,
    Contactless: 15,
    Contacts: 15,
    ContentCopy: 15,
    ContentCut: 15,
    ContentPaste: 15,
    ContentPasteOff: 2,
    ControlCamera: 7,
    ControlPoint: 15,
    CopyAll: 15,
    Copyright: 15,
    Coronavirus: 15,
    CorporateFare: 7,
    Cottage: 15,
    Countertops: 15,
    Create: 15,
    CreateNewFolder: 2,
    CreditCard: 15,
    CreditCardOff: 7,
    CreditScore: 15,
    Crib: 15,
    Crop: 15,
    Crop169: 15,
    Crop32: 15,
    Crop54: 15,
    Crop75: 15,
    CropDin: 15,
    CropFree: 15,
    CropLandscape: 7,
    CropOriginal: 15,
    CropPortrait: 15,
    CropRotate: 15,
    CropSquare: 15,
    Dangerous: 15,
    DarkMode: 15,
    Dashboard: 15,
    DashboardCustomize: 0,
    DataSaverOff: 15,
    DataSaverOn: 15,
    DataUsage: 15,
    DateRange: 15,
    Deck: 15,
    Dehaze: 15,
    Delete: 15,
    DeleteForever: 7,
    DeleteOutline: 7,
    DeleteSweep: 15,
    DeliveryDining: 2,
    DepartureBoard: 2,
    Description: 15,
    DesignServices: 2,
    DesktopMac: 15,
    DesktopWindows: 2,
    Details: 15,
    DeveloperBoard: 2,
    DeveloperBoardOff: 0,
    DeveloperMode: 7,
    DeviceHub: 15,
    DeviceThermostat: 0,
    DeviceUnknown: 7,
    Devices: 15,
    DevicesOther: 15,
    DialerSip: 15,
    Dialpad: 15,
    Dining: 15,
    DinnerDining: 15,
    Directions: 15,
    DirectionsBike: 2,
    DirectionsBoat: 2,
    DirectionsBoatFilled: 0,
    DirectionsBus: 7,
    DirectionsBusFilled: 0,
    DirectionsCar: 7,
    DirectionsCarFilled: 0,
    DirectionsOff: 7,
    DirectionsRailway: 0,
    DirectionsRun: 7,
    DirectionsSubway: 0,
    DirectionsTransit: 0,
    DirectionsWalk: 2,
    DirtyLens: 15,
    DisabledByDefault: 0,
    DiscFull: 15,
    Dns: 15,
    DoDisturb: 15,
    DoDisturbAlt: 15,
    DoDisturbOff: 15,
    DoDisturbOn: 15,
    DoNotDisturb: 15,
    DoNotDisturbAlt: 2,
    DoNotDisturbOff: 2,
    DoNotDisturbOn: 2,
    DoNotStep: 15,
    DoNotTouch: 15,
    Dock: 15,
    DocumentScanner: 2,
    Domain: 15,
    DomainDisabled: 2,
    DomainVerification: 0,
    Done: 15,
    DoneAll: 15,
    DoneOutline: 15,
    DonutLarge: 15,
    DonutSmall: 15,
    DoorBack: 15,
    DoorFront: 15,
    DoorSliding: 15,
    Doorbell: 15,
    DoubleArrow: 15,
    DownhillSkiing: 2,
    Download: 15,
    DownloadDone: 15,
    DownloadForOffline: 0,
    Downloading: 15,
    Drafts: 15,
    DragHandle: 15,
    DragIndicator: 7,
    DriveEta: 15,
    DriveFileMove: 7,
    DriveFolderUpload: 0,
    Dry: 15,
    DryCleaning: 15,
    Duo: 15,
    Dvr: 15,
    DynamicFeed: 15,
    DynamicForm: 15,
    EMobiledata: 15,
    Earbuds: 15,
    EarbudsBattery: 2,
    East: 15,
    Eco: 15,
    EdgesensorHigh: 2,
    EdgesensorLow: 7,
    Edit: 15,
    EditAttributes: 2,
    EditLocation: 15,
    EditLocationAlt: 2,
    EditNotifications: 0,
    EditOff: 15,
    EditRoad: 15,
    EightK: 15,
    EightKPlus: 15,
    EightMp: 15,
    EightteenMp: 15,
    Eject: 15,
    Elderly: 15,
    ElectricBike: 15,
    ElectricCar: 15,
    ElectricMoped: 7,
    ElectricRickshaw: 0,
    ElectricScooter: 2,
    ElectricalServices: 0,
    Elevator: 15,
    ElevenMp: 15,
    Email: 15,
    EmojiEmotions: 7,
    EmojiEvents: 15,
    EmojiFlags: 15,
    EmojiFoodBeverage: 0,
    EmojiNature: 15,
    EmojiObjects: 15,
    EmojiPeople: 15,
    EmojiSymbols: 15,
    EmojiTransportation: 0,
    Engineering: 15,
    EnhancedEncryption: 0,
    Equalizer: 15,
    Error: 15,
    ErrorOutline: 15,
    Escalator: 15,
    EscalatorWarning: 0,
    Euro: 15,
    EuroSymbol: 15,
    EvStation: 15,
    Event: 15,
    EventAvailable: 2,
    EventBusy: 15,
    EventNote: 15,
    EventSeat: 15,
    ExitToApp: 15,
    Expand: 15,
    ExpandLess: 15,
    ExpandMore: 15,
    Explicit: 15,
    Explore: 15,
    ExploreOff: 15,
    Exposure: 15,
    Extension: 15,
    ExtensionOff: 15,
    Face: 15,
    FaceRetouchingOff: 0,
    Facebook: 15,
    FactCheck: 15,
    FamilyRestroom: 2,
    FastForward: 15,
    FastRewind: 15,
    Fastfood: 15,
    Favorite: 15,
    FavoriteBorder: 2,
    FeaturedPlayList: 0,
    FeaturedVideo: 7,
    Feed: 15,
    Feedback: 15,
    Female: 15,
    Fence: 15,
    Festival: 15,
    FiberDvr: 15,
    FiberManualRecord: 0,
    FiberNew: 15,
    FiberPin: 15,
    FiberSmartRecord: 0,
    FileCopy: 15,
    FileDownload: 15,
    FileDownloadDone: 0,
    FileDownloadOff: 2,
    FilePresent: 15,
    FileUpload: 15,
    Filter: 15,
    Filter1: 15,
    Filter2: 15,
    Filter3: 15,
    Filter4: 15,
    Filter5: 15,
    Filter6: 15,
    Filter7: 15,
    Filter8: 15,
    Filter9: 15,
    Filter9Plus: 15,
    FilterAlt: 15,
    FilterBAndW: 15,
    FilterCenterFocus: 0,
    FilterDrama: 15,
    FilterFrames: 15,
    FilterHdr: 15,
    FilterList: 15,
    FilterNone: 15,
    FilterTiltShift: 2,
    FilterVintage: 7,
    FindInPage: 15,
    FindReplace: 15,
    Fingerprint: 15,
    FireExtinguisher: 0,
    Fireplace: 15,
    FirstPage: 15,
    FitScreen: 15,
    FitnessCenter: 7,
    FiveG: 15,
    FiveK: 15,
    FiveKPlus: 15,
    FiveMp: 15,
    FivteenMp: 15,
    Flag: 15,
    Flaky: 15,
    Flare: 15,
    FlashAuto: 15,
    FlashOff: 15,
    FlashOn: 15,
    FlashlightOff: 7,
    FlashlightOn: 15,
    Flatware: 15,
    Flight: 15,
    FlightLand: 15,
    FlightTakeoff: 7,
    Flip: 15,
    FlipCameraAndroid: 0,
    FlipCameraIos: 7,
    FlipToBack: 15,
    FlipToFront: 15,
    Flourescent: 15,
    FlutterDash: 15,
    FmdBad: 15,
    FmdGood: 15,
    Folder: 15,
    FolderOpen: 15,
    FolderShared: 15,
    FolderSpecial: 7,
    FollowTheSigns: 2,
    FontDownload: 15,
    FontDownloadOff: 2,
    FoodBank: 15,
    FormatAlignCenter: 0,
    FormatAlignJustify: 0,
    FormatAlignLeft: 2,
    FormatAlignRight: 0,
    FormatBold: 15,
    FormatClear: 15,
    FormatColorFill: 2,
    FormatColorReset: 0,
    FormatColorText: 2,
    FormatIndentDecrease: 0,
    FormatIndentIncrease: 0,
    FormatItalic: 15,
    FormatLineSpacing: 0,
    FormatListBulleted: 0,
    FormatListNumbered: 0,
    FormatPaint: 15,
    FormatQuote: 15,
    FormatShapes: 15,
    FormatSize: 15,
    FormatStrikethrough: 0,
    FormatUnderlined: 0,
    Forum: 15,
    Forward: 15,
    Forward10: 15,
    Forward30: 15,
    Forward5: 15,
    ForwardToInbox: 2,
    Foundation: 15,
    FourGMobiledata: 2,
    FourGPlusMobiledata: 0,
    FourK: 15,
    FourKPlus: 15,
    FourMp: 15,
    FourteenMp: 15,
    FreeBreakfast: 7,
    Fullscreen: 15,
    FullscreenExit: 2,
    Functions: 15,
    GMobiledata: 15,
    GTranslate: 15,
    Gamepad: 15,
    Games: 15,
    Garage: 15,
    Gavel: 15,
    Gesture: 15,
    GetApp: 15,
    Gif: 15,
    GitHub: 0,
    Gite: 15,
    GolfCourse: 15,
    Google: 0,
    GppBad: 15,
    GppGood: 15,
    GppMaybe: 15,
    GpsFixed: 15,
    GpsNotFixed: 15,
    GpsOff: 15,
    Grade: 15,
    Gradient: 15,
    Grading: 15,
    Grain: 15,
    GraphicEq: 15,
    Grass: 15,
    Grid3x3: 15,
    Grid4x4: 15,
    GridGoldenratio: 2,
    GridOff: 15,
    GridOn: 15,
    GridView: 15,
    Group: 15,
    GroupAdd: 15,
    GroupWork: 15,
    Groups: 15,
    HMobiledata: 15,
    HPlusMobiledata: 2,
    Hail: 15,
    Handyman: 15,
    Hardware: 15,
    Hd: 15,
    HdrAuto: 15,
    HdrAutoSelect: 7,
    HdrEnhancedSelect: 0,
    HdrOff: 15,
    HdrOffSelect: 15,
    HdrOn: 15,
    HdrOnSelect: 15,
    HdrPlus: 15,
    HdrSSUIg: 15,
    HdrWeak: 15,
    Headphones: 15,
    HeadphonesBattery: 0,
    Headset: 15,
    HeadsetMic: 15,
    HeadsetOff: 15,
    Healing: 15,
    HealthAndSafety: 2,
    Hearing: 15,
    HearingDisabled: 2,
    Height: 15,
    Help: 15,
    HelpCenter: 15,
    HelpOutline: 15,
    Hevc: 15,
    HideImage: 15,
    HideSource: 15,
    HighQuality: 15,
    Highlight: 15,
    HighlightAlt: 15,
    HighlightOff: 15,
    Hiking: 15,
    History: 15,
    HistoryEdu: 15,
    HistoryToggleOff: 0,
    HolidayVillage: 2,
    Home: 15,
    HomeMax: 15,
    HomeMini: 15,
    HomeRepairService: 0,
    HomeWork: 15,
    HorizontalRule: 2,
    HorizontalSplit: 2,
    HotTub: 15,
    Hotel: 15,
    HourglassBottom: 2,
    HourglassDisabled: 0,
    HourglassEmpty: 2,
    HourglassFull: 7,
    HourglassTop: 15,
    House: 15,
    HouseSiding: 15,
    Houseboat: 15,
    HowToReg: 15,
    HowToVote: 15,
    Http: 15,
    Https: 15,
    Hvac: 15,
    IceSkating: 15,
    Icecream: 15,
    Image: 15,
    ImageAspectRatio: 0,
    ImageNotSupported: 0,
    ImageSearch: 15,
    ImagesearchRoller: 0,
    ImportContacts: 2,
    ImportExport: 15,
    ImportantDevices: 0,
    Inbox: 15,
    Info: 15,
    Input: 15,
    InsertChart: 15,
    InsertComment: 7,
    InsertDriveFile: 2,
    InsertEmoticon: 2,
    InsertInvitation: 0,
    InsertLink: 15,
    InsertPhoto: 15,
    Insights: 15,
    Instagram: 0,
    Inventory: 15,
    Inventory2: 15,
    InvertColors: 15,
    InvertColorsOff: 2,
    IosShare: 15,
    Iron: 15,
    Iso: 15,
    Kayaking: 15,
    Keyboard: 15,
    KeyboardAlt: 15,
    KeyboardArrowDown: 0,
    KeyboardArrowLeft: 0,
    KeyboardArrowRight: 0,
    KeyboardArrowUp: 2,
    KeyboardBackspace: 0,
    KeyboardCapslock: 0,
    KeyboardHide: 15,
    KeyboardReturn: 2,
    KeyboardTab: 15,
    KeyboardVoice: 7,
    KingBed: 15,
    Kitchen: 15,
    Kitesurfing: 15,
    Label: 15,
    LabelImportant: 2,
    LabelOff: 15,
    Landscape: 15,
    Language: 15,
    Laptop: 15,
    LaptopChromebook: 0,
    LaptopMac: 15,
    LaptopWindows: 7,
    LastPage: 15,
    Launch: 15,
    Layers: 15,
    LayersClear: 15,
    Leaderboard: 15,
    LeakAdd: 15,
    LeakRemove: 15,
    LegendToggle: 15,
    Lens: 15,
    LensBlur: 15,
    LibraryAdd: 15,
    LibraryAddCheck: 2,
    LibraryBooks: 15,
    LibraryMusic: 15,
    Light: 15,
    LightMode: 15,
    Lightbulb: 15,
    LineStyle: 15,
    LineWeight: 15,
    LinearScale: 15,
    Link: 15,
    LinkOff: 15,
    LinkedCamera: 15,
    LinkedIn: 0,
    Liquor: 15,
    List: 15,
    ListAlt: 15,
    LiveHelp: 15,
    LiveTv: 15,
    Living: 15,
    LocalActivity: 7,
    LocalAirport: 15,
    LocalAtm: 15,
    LocalBar: 15,
    LocalCafe: 15,
    LocalCarWash: 15,
    LocalDining: 15,
    LocalDrink: 15,
    LocalFireDepartment: 0,
    LocalFlorist: 15,
    LocalGasStation: 2,
    LocalGroceryStore: 0,
    LocalHospital: 7,
    LocalHotel: 15,
    LocalLaundryService: 0,
    LocalLibrary: 15,
    LocalMall: 15,
    LocalMovies: 15,
    LocalOffer: 15,
    LocalParking: 15,
    LocalPharmacy: 7,
    LocalPhone: 15,
    LocalPizza: 15,
    LocalPlay: 15,
    LocalPolice: 15,
    LocalPostOffice: 2,
    LocalPrintshop: 2,
    LocalSee: 15,
    LocalShipping: 7,
    LocalTaxi: 15,
    LocationCity: 15,
    LocationDisabled: 0,
    LocationOff: 15,
    LocationOn: 15,
    LocationSearching: 0,
    Lock: 15,
    LockClock: 15,
    LockOpen: 15,
    Login: 15,
    Logout: 15,
    Looks: 15,
    Looks3: 15,
    Looks4: 15,
    Looks5: 15,
    Looks6: 15,
    LooksOne: 15,
    LooksTwo: 15,
    Loop: 15,
    Loupe: 15,
    LowPriority: 15,
    Loyalty: 15,
    LteMobiledata: 7,
    LtePlusMobiledata: 0,
    Luggage: 15,
    LunchDining: 15,
    Mail: 15,
    MailOutline: 15,
    Male: 15,
    ManageAccounts: 2,
    ManageSearch: 15,
    Map: 15,
    MapsHomeWork: 15,
    MapsUgc: 15,
    Margin: 15,
    MarkAsUnread: 15,
    MarkChatRead: 15,
    MarkChatUnread: 2,
    MarkEmailRead: 7,
    MarkEmailUnread: 2,
    Markunread: 15,
    MarkunreadMailbox: 0,
    Masks: 15,
    Maximize: 15,
    MediaBluetoothOff: 0,
    MediaBluetoothOn: 0,
    Mediation: 15,
    MedicalServices: 2,
    Medication: 15,
    MeetingRoom: 15,
    Memory: 15,
    Menu: 15,
    MenuBook: 15,
    MenuOpen: 15,
    MergeType: 15,
    Message: 15,
    Mic: 15,
    MicExternalOff: 2,
    MicExternalOn: 7,
    MicNone: 15,
    MicOff: 15,
    Microwave: 15,
    MilitaryTech: 15,
    Minimize: 15,
    MissedVideoCall: 2,
    Mms: 15,
    MobileFriendly: 2,
    MobileOff: 15,
    MobileScreenShare: 0,
    MobiledataOff: 7,
    Mode: 15,
    ModeComment: 15,
    ModeEdit: 15,
    ModeEditOutline: 2,
    ModeNight: 15,
    ModeStandby: 15,
    ModelTraining: 7,
    MonetizationOn: 2,
    Money: 15,
    MoneyOff: 15,
    MoneyOffCsred: 7,
    Monitor: 15,
    MonitorWeight: 7,
    MonochromePhotos: 0,
    Mood: 15,
    MoodBad: 15,
    Moped: 15,
    More: 15,
    MoreHoriz: 15,
    MoreTime: 15,
    MoreVert: 15,
    MotionPhotosAuto: 0,
    MotionPhotosOff: 2,
    Mouse: 15,
    MoveToInbox: 15,
    Movie: 15,
    MovieCreation: 7,
    MovieFilter: 15,
    Moving: 15,
    Mp: 15,
    MultilineChart: 2,
    MultipleStop: 15,
    Museum: 15,
    MusicNote: 15,
    MusicOff: 15,
    MusicVideo: 15,
    MyLocation: 15,
    Nat: 15,
    Nature: 15,
    NaturePeople: 15,
    NavigateBefore: 2,
    NavigateNext: 15,
    Navigation: 15,
    NearMe: 15,
    NearMeDisabled: 2,
    NearbyError: 15,
    NearbyOff: 15,
    NetworkCell: 15,
    NetworkCheck: 15,
    NetworkLocked: 7,
    NetworkWifi: 15,
    NewReleases: 15,
    NextPlan: 15,
    NextWeek: 15,
    Nfc: 15,
    NightShelter: 15,
    Nightlife: 15,
    Nightlight: 15,
    NightlightRound: 2,
    NightsStay: 15,
    NineK: 15,
    NineKPlus: 15,
    NineMp: 15,
    NineteenMp: 15,
    NoAccounts: 15,
    NoBackpack: 15,
    NoCell: 15,
    NoDrinks: 15,
    NoEncryption: 15,
    NoFlash: 15,
    NoFood: 15,
    NoLuggage: 15,
    NoMeals: 15,
    NoMeetingRoom: 7,
    NoPhotography: 7,
    NoSim: 15,
    NoStroller: 15,
    NoTransfer: 15,
    NordicWalking: 7,
    North: 15,
    NorthEast: 15,
    NorthWest: 15,
    NotAccessible: 7,
    NotInterested: 7,
    NotListedLocation: 0,
    NotStarted: 15,
    Note: 15,
    NoteAdd: 15,
    NoteAlt: 15,
    Notes: 15,
    NotificationAdd: 2,
    Notifications: 7,
    NotificationsActive: 0,
    NotificationsNone: 0,
    NotificationsOff: 0,
    NotificationsPaused: 0,
    OfflineBolt: 15,
    OfflinePin: 15,
    OfflineShare: 15,
    OndemandVideo: 7,
    OneK: 15,
    OneKPlus: 15,
    OneKk: 15,
    OnlinePrediction: 0,
    Opacity: 15,
    OpenInBrowser: 7,
    OpenInFull: 15,
    OpenInNew: 15,
    OpenInNewOff: 15,
    OpenWith: 15,
    OtherHouses: 15,
    Outbound: 15,
    Outbox: 15,
    OutdoorGrill: 15,
    Outlet: 15,
    Padding: 15,
    Pages: 15,
    Pageview: 15,
    Paid: 15,
    Palette: 15,
    PanTool: 15,
    Panorama: 15,
    PanoramaFishEye: 2,
    PanoramaHorizontal: 0,
    PanoramaPhotosphere: 0,
    PanoramaVertical: 0,
    PanoramaWideAngle: 0,
    Paragliding: 15,
    Park: 15,
    PartyMode: 15,
    Password: 15,
    Pattern: 15,
    Pause: 15,
    PauseCircle: 15,
    PauseCircleFilled: 0,
    PauseCircleOutline: 0,
    PausePresentation: 0,
    Payment: 15,
    Payments: 15,
    PedalBike: 15,
    Pending: 15,
    PendingActions: 2,
    People: 15,
    PeopleAlt: 15,
    PeopleOutline: 7,
    PermCameraMic: 7,
    PermContactCalendar: 0,
    PermDataSetting: 2,
    PermIdentity: 15,
    PermMedia: 15,
    PermPhoneMsg: 15,
    PermScanWifi: 15,
    Person: 15,
    PersonAdd: 15,
    PersonAddAlt: 15,
    PersonAddAlt1: 7,
    PersonAddDisabled: 0,
    PersonOff: 15,
    PersonOutline: 7,
    PersonPin: 15,
    PersonPinCircle: 2,
    PersonRemove: 15,
    PersonRemoveAlt1: 0,
    PersonSearch: 15,
    PersonalVideo: 7,
    PestControl: 15,
    PestControlRodent: 0,
    Pets: 15,
    Phone: 15,
    PhoneAndroid: 15,
    PhoneCallback: 7,
    PhoneDisabled: 7,
    PhoneEnabled: 15,
    PhoneForwarded: 2,
    PhoneInTalk: 15,
    PhoneIphone: 15,
    PhoneLocked: 15,
    PhoneMissed: 15,
    PhonePaused: 15,
    Phonelink: 15,
    PhonelinkErase: 2,
    PhonelinkLock: 7,
    PhonelinkOff: 15,
    PhonelinkRing: 7,
    PhonelinkSetup: 2,
    Photo: 15,
    PhotoAlbum: 15,
    PhotoCamera: 15,
    PhotoCameraBack: 2,
    PhotoCameraFront: 0,
    PhotoFilter: 15,
    PhotoLibrary: 15,
    PhotoSizeSelectLarge: 0,
    PhotoSizeSelectSmall: 0,
    Piano: 15,
    PianoOff: 15,
    PictureAsPdf: 15,
    PictureInPicture: 0,
    PictureInPictureAlt: 0,
    PieChart: 15,
    PieChartOutline: 2,
    Pin: 15,
    PinDrop: 15,
    Pinterest: 0,
    PivotTableChart: 2,
    Place: 15,
    Plagiarism: 15,
    PlayArrow: 15,
    PlayCircle: 15,
    PlayCircleFilled: 0,
    PlayCircleOutline: 0,
    PlayDisabled: 15,
    PlayForWork: 15,
    PlayLesson: 15,
    PlaylistAdd: 15,
    PlaylistAddCheck: 0,
    PlaylistPlay: 15,
    Plumbing: 15,
    PlusOne: 15,
    Podcasts: 15,
    PointOfSale: 15,
    Policy: 15,
    Poll: 15,
    Pool: 15,
    PortableWifiOff: 2,
    Portrait: 15,
    PostAdd: 15,
    Power: 15,
    PowerInput: 15,
    PowerOff: 15,
    PowerSettingsNew: 0,
    PregnantWoman: 7,
    PresentToAll: 15,
    Preview: 15,
    PriceChange: 15,
    PriceCheck: 15,
    Print: 15,
    PrintDisabled: 7,
    PriorityHigh: 15,
    PrivacyTip: 15,
    Psychology: 15,
    Public: 15,
    PublicOff: 15,
    Publish: 15,
    PublishedWithChanges: 0,
    PushPin: 15,
    QrCode: 15,
    QrCode2: 15,
    QrCodeScanner: 7,
    QueryBuilder: 15,
    QueryStats: 15,
    QuestionAnswer: 2,
    Queue: 15,
    QueueMusic: 15,
    QueuePlayNext: 7,
    Quickreply: 15,
    Quiz: 15,
    RMobiledata: 15,
    Radar: 15,
    Radio: 15,
    RadioButtonChecked: 0,
    RadioButtonUnchecked: 0,
    RailwayAlert: 15,
    RamenDining: 15,
    RateReview: 15,
    RawOff: 15,
    RawOn: 15,
    ReadMore: 15,
    Receipt: 15,
    ReceiptLong: 15,
    RecentActors: 15,
    Recommend: 15,
    RecordVoiceOver: 2,
    Reddit: 0,
    Redeem: 15,
    Redo: 15,
    ReduceCapacity: 2,
    Refresh: 15,
    RememberMe: 15,
    Remove: 15,
    RemoveCircle: 15,
    RemoveCircleOutline: 0,
    RemoveDone: 15,
    RemoveFromQueue: 2,
    RemoveModerator: 2,
    RemoveRedEye: 15,
    RemoveShoppingCart: 0,
    Reorder: 15,
    Repeat: 15,
    RepeatOn: 15,
    RepeatOne: 15,
    RepeatOneOn: 15,
    Replay: 15,
    Replay10: 15,
    Replay30: 15,
    Replay5: 15,
    ReplayCircleFilled: 0,
    Reply: 15,
    ReplyAll: 15,
    Report: 15,
    ReportGmailerrorred: 0,
    ReportOff: 15,
    ReportProblem: 7,
    RequestPage: 15,
    RequestQuote: 15,
    ResetTv: 15,
    RestartAlt: 15,
    Restaurant: 15,
    RestaurantMenu: 2,
    Restore: 15,
    RestoreFromTrash: 0,
    RestorePage: 15,
    Reviews: 15,
    RiceBowl: 15,
    RingVolume: 15,
    Roofing: 15,
    Room: 15,
    RoomPreferences: 2,
    RoomService: 15,
    Rotate90DegreesCcw: 0,
    RotateLeft: 15,
    RotateRight: 15,
    Router: 15,
    Rowing: 15,
    RssFeed: 15,
    Rsvp: 15,
    Rtt: 15,
    Rule: 15,
    RuleFolder: 15,
    RunCircle: 15,
    RunningWithErrors: 0,
    RvHookup: 15,
    SafetyDivider: 7,
    Sailing: 15,
    Sanitizer: 15,
    Satellite: 15,
    Save: 15,
    SaveAlt: 15,
    SavedSearch: 15,
    Savings: 15,
    Scanner: 15,
    ScatterPlot: 15,
    Schedule: 15,
    ScheduleSend: 15,
    Schema: 15,
    School: 15,
    Science: 15,
    Score: 15,
    ScreenLockLandscape: 0,
    ScreenLockPortrait: 0,
    ScreenLockRotation: 0,
    ScreenRotation: 2,
    ScreenSearchDesktop: 0,
    ScreenShare: 15,
    Screenshot: 15,
    Sd: 15,
    SdCard: 15,
    SdCardAlert: 15,
    SdStorage: 15,
    Search: 15,
    SearchOff: 15,
    Security: 15,
    SecurityUpdate: 2,
    SecurityUpdateGood: 0,
    Segment: 15,
    SelectAll: 15,
    SelfImprovement: 2,
    Sell: 15,
    Send: 15,
    SendAndArchive: 2,
    SendToMobile: 15,
    SensorDoor: 15,
    SensorWindow: 15,
    Sensors: 15,
    SensorsOff: 15,
    SentimentNeutral: 0,
    SentimentSatisfied: 0,
    SetMeal: 15,
    Settings: 15,
    SettingsApplications: 0,
    SettingsBluetooth: 0,
    SettingsBrightness: 0,
    SettingsCell: 15,
    SettingsEthernet: 0,
    SettingsInputAntenna: 0,
    SettingsInputHdmi: 0,
    SettingsInputSvideo: 0,
    SettingsOverscan: 0,
    SettingsPhone: 7,
    SettingsPower: 7,
    SettingsRemote: 2,
    SettingsSuggest: 2,
    SettingsVoice: 7,
    SevenK: 15,
    SevenKPlus: 15,
    SevenMp: 15,
    SeventeenMp: 15,
    Share: 15,
    ShareLocation: 7,
    Shield: 15,
    Shop: 15,
    Shop2: 15,
    ShopTwo: 15,
    ShoppingBag: 15,
    ShoppingBasket: 2,
    ShoppingCart: 15,
    ShortText: 15,
    Shortcut: 15,
    ShowChart: 15,
    Shower: 15,
    Shuffle: 15,
    ShuffleOn: 15,
    ShutterSpeed: 15,
    Sick: 15,
    SignalCellular0Bar: 0,
    SignalCellular1Bar: 0,
    SignalCellular2Bar: 0,
    SignalCellular3Bar: 0,
    SignalCellular4Bar: 0,
    SignalCellularAlt: 0,
    SignalCellularNoSim: 0,
    SignalCellularNodata: 0,
    SignalCellularNull: 0,
    SignalCellularOff: 0,
    SignalWifi0Bar: 2,
    SignalWifi1Bar: 2,
    SignalWifi1BarLock: 0,
    SignalWifi2Bar: 2,
    SignalWifi2BarLock: 0,
    SignalWifi3Bar: 2,
    SignalWifi3BarLock: 0,
    SignalWifi4Bar: 2,
    SignalWifi4BarLock: 0,
    SignalWifiBad: 7,
    SignalWifiOff: 7,
    SimCard: 15,
    SimCardAlert: 15,
    SimCardDownload: 2,
    SingleBed: 15,
    Sip: 15,
    SixK: 15,
    SixKPlus: 15,
    SixMp: 15,
    SixteenMp: 15,
    SixtyFps: 15,
    SixtyFpsSelect: 2,
    Skateboarding: 7,
    SkipNext: 15,
    SkipPrevious: 15,
    Sledding: 15,
    Slideshow: 15,
    SlowMotionVideo: 2,
    SmartButton: 15,
    SmartDisplay: 15,
    SmartScreen: 15,
    SmartToy: 15,
    Smartphone: 15,
    SmokeFree: 15,
    SmokingRooms: 15,
    Sms: 15,
    SmsFailed: 15,
    SnippetFolder: 7,
    Snooze: 15,
    Snowboarding: 15,
    Snowmobile: 15,
    Snowshoeing: 15,
    Soap: 15,
    SocialDistance: 2,
    Sort: 15,
    SortByAlpha: 15,
    Source: 15,
    South: 15,
    SouthEast: 15,
    SouthWest: 15,
    Spa: 15,
    SpaceBar: 15,
    Speaker: 15,
    SpeakerGroup: 15,
    SpeakerNotes: 15,
    SpeakerNotesOff: 2,
    SpeakerPhone: 15,
    Speed: 15,
    Spellcheck: 15,
    Splitscreen: 15,
    Sports: 15,
    SportsBar: 15,
    SportsBaseball: 2,
    SportsBasketball: 0,
    SportsCricket: 7,
    SportsEsports: 7,
    SportsFootball: 2,
    SportsGolf: 15,
    SportsHandball: 2,
    SportsHockey: 15,
    SportsKabaddi: 7,
    SportsMma: 15,
    SportsMotorsports: 0,
    SportsRugby: 15,
    SportsScore: 15,
    SportsSoccer: 15,
    SportsTennis: 15,
    SportsVolleyball: 0,
    SquareFoot: 15,
    StackedBarChart: 2,
    StackedLineChart: 0,
    Stairs: 15,
    Star: 15,
    StarBorder: 15,
    StarBorderPurple500: 0,
    StarHalf: 15,
    StarOutline: 15,
    StarPurple500: 7,
    StarRate: 15,
    Stars: 15,
    StayCurrentLandscape: 0,
    StayCurrentPortrait: 0,
    StayPrimaryLandscape: 0,
    StayPrimaryPortrait: 0,
    StickyNote2: 15,
    Stop: 15,
    StopCircle: 15,
    StopScreenShare: 2,
    Storage: 15,
    Store: 15,
    StoreMallDirectory: 0,
    Storefront: 15,
    Storm: 15,
    Straighten: 15,
    Stream: 15,
    Streetview: 15,
    StrikethroughS: 2,
    Stroller: 15,
    Style: 15,
    Subject: 15,
    Subscript: 15,
    Subscriptions: 7,
    Subtitles: 15,
    SubtitlesOff: 15,
    Subway: 15,
    Summarize: 15,
    Superscript: 15,
    SupervisedUserCircle: 0,
    SupervisorAccount: 0,
    Support: 15,
    SupportAgent: 15,
    Surfing: 15,
    SurroundSound: 7,
    SwapCalls: 15,
    SwapHoriz: 15,
    SwapHorizontalCircle: 0,
    SwapVert: 15,
    SwapVerticalCircle: 0,
    Swipe: 15,
    SwitchAccount: 7,
    SwitchCamera: 15,
    SwitchLeft: 15,
    SwitchRight: 15,
    SwitchVideo: 15,
    Sync: 15,
    SyncAlt: 15,
    SyncDisabled: 15,
    SyncProblem: 15,
    SystemSecurityUpdate: 0,
    SystemUpdate: 15,
    SystemUpdateAlt: 2,
    Tab: 15,
    TabUnselected: 7,
    TableChart: 15,
    TableRows: 15,
    TableView: 15,
    Tablet: 15,
    TabletAndroid: 7,
    TabletMac: 15,
    Tag: 15,
    TagFaces: 15,
    TakeoutDining: 7,
    TapAndPlay: 15,
    Tapas: 15,
    Task: 15,
    TaskAlt: 15,
    TaxiAlert: 15,
    Telegram: 0,
    TenMp: 15,
    Terrain: 15,
    TextFields: 15,
    TextFormat: 15,
    TextRotateUp: 15,
    TextRotateVertical: 0,
    TextRotationAngleup: 0,
    TextRotationDown: 0,
    TextRotationNone: 0,
    TextSnippet: 15,
    Textsms: 15,
    Texture: 15,
    TheaterComedy: 7,
    Theaters: 15,
    Thermostat: 15,
    ThermostatAuto: 2,
    ThirteenMp: 15,
    ThirtyFps: 15,
    ThirtyFpsSelect: 2,
    ThreeDRotation: 2,
    ThreeGMobiledata: 0,
    ThreeK: 15,
    ThreeKPlus: 15,
    ThreeMp: 15,
    ThreeP: 15,
    ThreeSixty: 15,
    ThumbDown: 15,
    ThumbDownAlt: 15,
    ThumbDownOffAlt: 2,
    ThumbUp: 15,
    ThumbUpAlt: 15,
    ThumbUpOffAlt: 7,
    ThumbsUpDown: 15,
    TimeToLeave: 15,
    Timelapse: 15,
    Timeline: 15,
    Timer: 15,
    Timer10: 15,
    Timer10Select: 7,
    Timer3: 15,
    Timer3Select: 15,
    TimerOff: 15,
    TimesOneMobiledata: 0,
    Title: 15,
    Toc: 15,
    Today: 15,
    ToggleOff: 15,
    ToggleOn: 15,
    Toll: 15,
    Tonality: 15,
    Topic: 15,
    TouchApp: 15,
    Tour: 15,
    Toys: 15,
    TrackChanges: 15,
    Traffic: 15,
    Train: 15,
    Tram: 15,
    Transform: 15,
    Transgender: 15,
    TransitEnterexit: 0,
    Translate: 15,
    TravelExplore: 7,
    TrendingDown: 15,
    TrendingFlat: 15,
    TrendingUp: 15,
    TripOrigin: 15,
    Try: 15,
    Tty: 15,
    Tune: 15,
    Tungsten: 15,
    TurnedIn: 15,
    TurnedInNot: 15,
    Tv: 15,
    TvOff: 15,
    TwelveMp: 15,
    TwentyFourMp: 15,
    TwentyOneMp: 15,
    TwentyThreeMp: 7,
    TwentyTwoMp: 15,
    TwentyZeroMp: 15,
    Twitter: 0,
    TwoK: 15,
    TwoKPlus: 15,
    TwoMp: 15,
    TwoWheeler: 15,
    Umbrella: 15,
    Unarchive: 15,
    Undo: 15,
    UnfoldLess: 15,
    UnfoldMore: 15,
    Unpublished: 15,
    Unsubscribe: 15,
    Upcoming: 15,
    Update: 15,
    UpdateDisabled: 2,
    Upgrade: 15,
    Upload: 15,
    UploadFile: 15,
    Usb: 15,
    UsbOff: 15,
    Verified: 15,
    VerifiedUser: 15,
    VerticalAlignBottom: 0,
    VerticalAlignCenter: 0,
    VerticalAlignTop: 0,
    VerticalSplit: 7,
    Vibration: 15,
    VideoCall: 15,
    VideoCameraBack: 2,
    VideoCameraFront: 0,
    VideoLabel: 15,
    VideoLibrary: 15,
    VideoSettings: 7,
    VideoStable: 15,
    Videocam: 15,
    VideocamOff: 15,
    VideogameAsset: 2,
    VideogameAssetOff: 0,
    ViewAgenda: 15,
    ViewArray: 15,
    ViewCarousel: 15,
    ViewColumn: 15,
    ViewComfy: 15,
    ViewCompact: 15,
    ViewDay: 15,
    ViewHeadline: 15,
    ViewInAr: 15,
    ViewList: 15,
    ViewModule: 15,
    ViewQuilt: 15,
    ViewSidebar: 15,
    ViewStream: 15,
    ViewWeek: 15,
    Vignette: 15,
    Villa: 15,
    Visibility: 15,
    VisibilityOff: 7,
    VoiceChat: 15,
    VoiceOverOff: 15,
    Voicemail: 15,
    VolumeDown: 15,
    VolumeMute: 15,
    VolumeOff: 15,
    VolumeUp: 15,
    VolunteerActivism: 0,
    VpnKey: 15,
    VpnLock: 15,
    Vrpano: 15,
    Wallpaper: 15,
    Warning: 15,
    WarningAmber: 15,
    Wash: 15,
    Watch: 15,
    WatchLater: 15,
    Water: 15,
    WaterDamage: 15,
    WaterfallChart: 2,
    Waves: 15,
    WbAuto: 15,
    WbCloudy: 15,
    WbIncandescent: 2,
    WbIridescent: 15,
    WbShade: 15,
    WbSunny: 15,
    WbTwilight: 15,
    Wc: 15,
    Web: 15,
    WebAsset: 15,
    WebAssetOff: 15,
    Weekend: 15,
    West: 15,
    WhatsApp: 0,
    Whatshot: 15,
    WheelchairPickup: 0,
    WhereToVote: 15,
    Widgets: 15,
    Wifi: 15,
    WifiCalling: 15,
    WifiCalling3: 15,
    WifiLock: 15,
    WifiOff: 15,
    WifiProtectedSetup: 0,
    WifiTethering: 7,
    WifiTetheringOff: 0,
    Window: 15,
    WineBar: 15,
    Work: 15,
    WorkOff: 15,
    WorkOutline: 15,
    Workspaces: 15,
    WrapText: 15,
    WrongLocation: 7,
    Wysiwyg: 15,
    Yard: 15,
    YouTube: 0,
    YoutubeSearchedFor: 0,
    ZoomIn: 15,
    ZoomOut: 15,
    ZoomOutMap: 15
}
  , ze = Object.keys(De)
  , kt = ["Filled", "TwoTone", "Sharp", "Rounded", "Outlined"]
  , fr = {
    15: [...kt],
    7: ["Filled", "TwoTone", "Sharp", "Rounded"],
    2: ["Filled", "Sharp"]
}
  , Ft = Object.keys(fr).map(r => `iconStyle${r}`)
  , Yr = ze.reduce( (r, a) => (r[a.toLowerCase()] = a,
r), {});
function E(r) {
    let {color: a, selectByList: n, iconSearch: o, iconSelection: l, onClick: c, onMouseDown: m, onMouseUp: x, onMouseEnter: g, onMouseLeave: i, mirrored: p, style: h} = r
      , v = X(!1)
      , w = Zr(ze, n, o, l, Yr)
      , b = Ft.map(A => r[A])
      , L = Q( () => {
        let A = De[w];
        if (!A)
            return;
        let D = r[`iconStyle${A}`];
        if (D !== "Filled")
            return D
    }
    , [...b])
      , [F,O] = Le(w === "Home" ? Vr(me) : null);
    async function B() {
        if (typeof De[w] != "number") {
            O(null);
            return
        }
        try {
            let u = await import(`${It}${w}${L || ""}.js@0.0.32`);
            v.current && O(u.default(me))
        } catch {
            v.current && O(null)
        }
    }
    be( () => (v.current = !0,
    B(),
    () => {
        v.current = !1
    }
    ), [w, ...b]);
    let R = de.current() === de.canvas ? e(Wr, {}) : null;
    return e(C.div, {
        style: {
            display: "contents"
        },
        onClick: c,
        onMouseEnter: g,
        onMouseLeave: i,
        onMouseDown: m,
        onMouseUp: x,
        children: F ? e("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            style: {
                userSelect: "none",
                width: "100%",
                height: "100%",
                display: "inline-block",
                fill: a,
                flexShrink: 0,
                transform: p ? "scale(-1, 1)" : void 0,
                ...h
            },
            focusable: "false",
            viewBox: "0 0 24 24",
            color: a,
            children: F
        }) : R
    })
}
E.displayName = "Material";
E.defaultProps = {
    width: 24,
    height: 24,
    iconSelection: "Home",
    iconSearch: "Home",
    color: "#66F",
    selectByList: !0,
    weight: "Filled",
    mirrored: !1
};
function Pt(r, a) {
    let {selectByList: n, iconSearch: o, iconSelection: l} = r
      , c = parseInt(a)
      , m = Hr(ze, n, o, l, Yr)
      , x = De[m];
    return !x || c === 0 ? !0 : x !== c
}
he(E, {
    selectByList: {
        type: y.Boolean,
        title: "Select",
        enabledTitle: "List",
        disabledTitle: "Search",
        defaultValue: E.defaultProps.selectByList
    },
    iconSelection: {
        type: y.Enum,
        options: ze,
        defaultValue: E.defaultProps.iconSelection,
        title: "Name",
        hidden: ({selectByList: r}) => !r,
        description: "Find every icon name on the [Material site](https://fonts.google.com/icons)"
    },
    iconSearch: {
        type: y.String,
        title: "Name",
        placeholder: "Menu, Wifi, Box\u2026",
        hidden: ({selectByList: r}) => r
    },
    mirrored: {
        type: y.Boolean,
        enabledTitle: "Yes",
        disabledTitle: "No",
        defaultValue: E.defaultProps.mirrored
    },
    color: {
        type: y.Color,
        title: "Color",
        defaultValue: E.defaultProps.color
    },
    ...Object.keys(fr).reduce( (r, a) => (r[`iconStyle${a}`] = {
        type: y.Enum,
        title: "Style",
        defaultValue: "Filled",
        options: fr[a],
        hidden: n => Pt(n, a)
    },
    r), {}),
    ...Ur
});
var Ce = r => r;
var Ee = {
    ms: r => 1e3 * r,
    s: r => r / 1e3
};
function cr(r, a) {
    return a ? r * (1e3 / a) : 0
}
var Kr = (r, a, n) => (((1 - 3 * n + 3 * a) * r + (3 * n - 6 * a)) * r + 3 * a) * r
  , At = 1e-7
  , Xt = 12;
function Rt(r, a, n, o, l) {
    let c, m, x = 0;
    do
        m = a + (n - a) / 2,
        c = Kr(m, o, l) - r,
        c > 0 ? n = m : a = m;
    while (Math.abs(c) > At && ++x < Xt);
    return m
}
function Ie(r, a, n, o) {
    if (r === a && n === o)
        return Ce;
    let l = c => Rt(c, 0, 1, r, n);
    return c => c === 0 || c === 1 ? c : Kr(l(c), a, o)
}
var yn = {
    ease: Ie(.25, .1, .25, 1),
    "ease-in": Ie(.42, 0, 1, 1),
    "ease-in-out": Ie(.42, 0, .58, 1),
    "ease-out": Ie(0, 0, .58, 1)
};
function qr(r, a) {
    var n = {};
    for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && a.indexOf(o) < 0 && (n[o] = r[o]);
    if (r != null && typeof Object.getOwnPropertySymbols == "function") {
        var l = 0;
        for (o = Object.getOwnPropertySymbols(r); l < o.length; l++)
            a.indexOf(o[l]) < 0 && Object.prototype.propertyIsEnumerable.call(r, o[l]) && (n[o[l]] = r[o[l]])
    }
    return n
}
var pe = {};
Object.defineProperty(pe, "__esModule", {
    value: !0
});
pe.warning = function() {}
;
pe.invariant = function() {}
;
var Sn = pe.__esModule
  , Cn = pe.warning
  , Nt = pe.invariant;
var Bt = 5;
function Ge(r, a, n) {
    let o = Math.max(a - Bt, 0);
    return cr(n - r(o), a - o)
}
var ge = {
    stiffness: 100,
    damping: 10,
    mass: 1
}
  , Mt = (r=ge.stiffness, a=ge.damping, n=ge.mass) => a / (2 * Math.sqrt(r * n));
function Dt(r, a, n) {
    return r < a && n >= a || r > a && n <= a
}
var dr = ({stiffness: r=ge.stiffness, damping: a=ge.damping, mass: n=ge.mass, from: o=0, to: l=1, velocity: c=0, restSpeed: m=2, restDistance: x=.5}={}) => {
    c = c ? Ee.s(c) : 0;
    let g = {
        done: !1,
        hasReachedTarget: !1,
        current: o,
        target: l
    }, i = l - o, p = Math.sqrt(r / n) / 1e3, h = Mt(r, a, n), v;
    if (h < 1) {
        let w = p * Math.sqrt(1 - h * h);
        v = b => l - Math.exp(-h * p * b) * ((h * p * i - c) / w * Math.sin(w * b) + i * Math.cos(w * b))
    } else
        v = w => l - Math.exp(-p * w) * (i + (p * i - c) * w);
    return w => {
        g.current = v(w);
        let b = w === 0 ? c : Ge(v, w, g.current)
          , L = Math.abs(b) <= m
          , F = Math.abs(l - g.current) <= x;
        return g.done = L && F,
        g.hasReachedTarget = Dt(o, l, g.current),
        g
    }
}
  , Qr = ({from: r=0, velocity: a=0, power: n=.8, decay: o=.325, bounceDamping: l, bounceStiffness: c, changeTarget: m, min: x, max: g, restDistance: i=.5, restSpeed: p}) => {
    o = Ee.ms(o);
    let h = {
        hasReachedTarget: !1,
        done: !1,
        current: r,
        target: r
    }
      , v = u => x !== void 0 && u < x || g !== void 0 && u > g
      , w = u => x === void 0 ? g : g === void 0 || Math.abs(x - u) < Math.abs(g - u) ? x : g
      , b = n * a
      , L = r + b
      , F = m === void 0 ? L : m(L);
    h.target = F,
    F !== L && (b = F - r);
    let O = u => -b * Math.exp(-u / o), B = u => F + O(u), M = u => {
        let T = O(u)
          , V = B(u);
        h.done = Math.abs(T) <= i,
        h.current = h.done ? F : V
    }
    , R, A, D = u => {
        v(h.current) && (R = u,
        A = dr({
            from: h.current,
            to: w(h.current),
            velocity: Ge(B, u, h.current),
            damping: l,
            stiffness: c,
            restDistance: i,
            restSpeed: p
        }))
    }
    ;
    return D(0),
    u => {
        let T = !1;
        return !A && R === void 0 && (T = !0,
        M(u),
        D(u)),
        R !== void 0 && u > R ? (h.hasReachedTarget = !0,
        A(u - R)) : (h.hasReachedTarget = !1,
        !T && M(u),
        h)
    }
}
  , mr = 10
  , zt = 1e4;
function Jr(r) {
    let a, n = mr, o = r(0), l = [o.current];
    for (; !o.done && n < zt; )
        o = r(n),
        l.push(o.done ? o.target : o.current),
        a === void 0 && o.hasReachedTarget && (a = n),
        n += mr;
    let c = n - mr;
    return l.length === 1 && l.push(o.current),
    {
        keyframes: l,
        duration: c / 1e3,
        overshootDuration: (a ?? c) / 1e3
    }
}
var Et = ["", "X", "Y", "Z"]
  , Gt = ["translate", "scale", "rotate", "skew"];
var $r = {
    syntax: "<angle>",
    initialValue: "0deg",
    toDefaultUnit: r => r + "deg"
}
  , Wt = {
    translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: r => r + "px"
    },
    rotate: $r,
    scale: {
        syntax: "<number>",
        initialValue: 1,
        toDefaultUnit: Ce
    },
    skew: $r
}
  , Vt = new Map
  , Ut = r => `--motion-${r}`
  , nt = ["x", "y", "z"];
Gt.forEach(r => {
    Et.forEach(a => {
        nt.push(r + a),
        Vt.set(Ut(r + a), Wt[r])
    }
    )
}
);
var Kn = new Set(nt);
var et = r => document.createElement("div").animate(r, {
    duration: .001
})
  , rt = {
    cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
    waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
    partialKeyframes: () => {
        try {
            et({
                opacity: [1]
            })
        } catch {
            return !1
        }
        return !0
    }
    ,
    finished: () => !!et({
        opacity: [0, 1]
    }).finished
}
  , hr = {}
  , jt = {};
for (let r in rt)
    jt[r] = () => (hr[r] === void 0 && (hr[r] = rt[r]()),
    hr[r]);
function ot(r, a) {
    var n;
    return typeof r == "string" ? a ? ((n = a[r]) !== null && n !== void 0 || (a[r] = document.querySelectorAll(r)),
    r = a[r]) : r = document.querySelectorAll(r) : r instanceof Element && (r = [r]),
    Array.from(r || [])
}
function it(r) {
    let a = new WeakMap;
    return (n={}) => {
        let o = new Map
          , l = (m=0, x=100, g=0, i=!1) => {
            let p = `${m}-${x}-${g}-${i}`;
            return o.has(p) || o.set(p, r(Object.assign({
                from: m,
                to: x,
                velocity: g,
                restSpeed: i ? .05 : 2,
                restDistance: i ? .01 : .5
            }, n))),
            o.get(p)
        }
          , c = m => (a.has(m) || a.set(m, Jr(m)),
        a.get(m));
        return {
            createAnimation: (m, x, g, i, p) => {
                var h, v;
                let w, b = m.length;
                if (g && b <= 2 && m.every(Ht)) {
                    let F = m[b - 1]
                      , O = b === 1 ? null : m[0]
                      , B = 0
                      , M = 0
                      , R = p?.generator;
                    if (R) {
                        let {animation: u, generatorStartTime: T} = p
                          , V = u?.startTime || T || 0
                          , z = u?.currentTime || performance.now() - V
                          , G = R(z).current;
                        M = (h = O) !== null && h !== void 0 ? h : G,
                        (b === 1 || b === 2 && m[0] === null) && (B = Ge(q => R(q).current, z, G))
                    } else
                        M = (v = O) !== null && v !== void 0 ? v : parseFloat(x());
                    let A = l(M, F, B, i?.includes("scale"))
                      , D = c(A);
                    w = Object.assign(Object.assign({}, D), {
                        easing: "linear"
                    }),
                    p && (p.generator = A,
                    p.generatorStartTime = performance.now())
                } else
                    w = {
                        easing: "ease",
                        duration: c(l(0, 100)).overshootDuration
                    };
                return w
            }
        }
    }
}
var Ht = r => typeof r != "string"
  , qn = it(dr)
  , Qn = it(Qr)
  , Zt = {
    any: 0,
    all: 1
};
function Yt(r, a, {root: n, margin: o, amount: l="any"}={}) {
    if (typeof IntersectionObserver > "u")
        return () => {}
        ;
    let c = ot(r)
      , m = new WeakMap
      , x = i => {
        i.forEach(p => {
            let h = m.get(p.target);
            if (p.isIntersecting !== !!h)
                if (p.isIntersecting) {
                    let v = a(p);
                    typeof v == "function" ? m.set(p.target, v) : g.unobserve(p.target)
                } else
                    h && (h(p),
                    m.delete(p.target))
        }
        )
    }
      , g = new IntersectionObserver(x,{
        root: n,
        rootMargin: o,
        threshold: typeof l == "number" ? l : Zt[l]
    });
    return c.forEach(i => g.observe(i)),
    () => g.disconnect()
}
var We = new WeakMap, J;
function Kt(r, a) {
    if (a) {
        let {inlineSize: n, blockSize: o} = a[0];
        return {
            width: n,
            height: o
        }
    }
    return r instanceof SVGElement && "getBBox"in r ? r.getBBox() : {
        width: r.offsetWidth,
        height: r.offsetHeight
    }
}
function qt({target: r, contentRect: a, borderBoxSize: n}) {
    var o;
    (o = We.get(r)) === null || o === void 0 || o.forEach(l => {
        l({
            target: r,
            contentSize: a,
            get size() {
                return Kt(r, n)
            }
        })
    }
    )
}
function Qt(r) {
    r.forEach(qt)
}
function Jt() {
    typeof ResizeObserver < "u" && (J = new ResizeObserver(Qt))
}
function $t(r, a) {
    J || Jt();
    let n = ot(r);
    return n.forEach(o => {
        let l = We.get(o);
        l || (l = new Set,
        We.set(o, l)),
        l.add(a),
        J?.observe(o)
    }
    ),
    () => {
        n.forEach(o => {
            let l = We.get(o);
            l?.delete(a),
            l?.size || J?.unobserve(o)
        }
        )
    }
}
var Ve = new Set, ke;
function ea() {
    ke = () => {
        let r = {
            width: I.innerWidth,
            height: I.innerHeight
        }
          , a = {
            target: I,
            size: r,
            contentSize: r
        };
        Ve.forEach(n => n(a))
    }
    ,
    I.addEventListener("resize", ke)
}
function ra(r) {
    return Ve.add(r),
    ke || ea(),
    () => {
        Ve.delete(r),
        !Ve.size && ke && (ke = void 0)
    }
}
function lt(r, a) {
    return typeof r == "function" ? ra(r) : $t(r, a)
}
function pr(r, a, n) {
    r.dispatchEvent(new CustomEvent(a,{
        detail: {
            originalEvent: n
        }
    }))
}
function tt(r, a, n) {
    r.dispatchEvent(new CustomEvent(a,{
        detail: {
            originalEntry: n
        }
    }))
}
var ta = {
    isActive: r => !!r.inView,
    subscribe: (r, {enable: a, disable: n}, {inViewOptions: o={}}) => {
        let {once: l} = o
          , c = qr(o, ["once"]);
        return Yt(r, m => {
            if (a(),
            tt(r, "viewenter", m),
            !l)
                return x => {
                    n(),
                    tt(r, "viewleave", x)
                }
        }
        , c)
    }
}
  , at = (r, a, n) => o => {
    (!o.pointerType || o.pointerType === "mouse") && (n(),
    pr(r, a, o))
}
  , aa = {
    isActive: r => !!r.hover,
    subscribe: (r, {enable: a, disable: n}) => {
        let o = at(r, "hoverstart", a)
          , l = at(r, "hoverend", n);
        return r.addEventListener("pointerenter", o),
        r.addEventListener("pointerleave", l),
        () => {
            r.removeEventListener("pointerenter", o),
            r.removeEventListener("pointerleave", l)
        }
    }
}
  , na = {
    isActive: r => !!r.press,
    subscribe: (r, {enable: a, disable: n}) => {
        let o = c => {
            n(),
            pr(r, "pressend", c),
            I.removeEventListener("pointerup", o)
        }
          , l = c => {
            a(),
            pr(r, "pressstart", c),
            I.addEventListener("pointerup", o)
        }
        ;
        return r.addEventListener("pointerdown", l),
        () => {
            r.removeEventListener("pointerdown", l),
            I.removeEventListener("pointerup", o)
        }
    }
}
  , oa = {
    inView: ta,
    hover: aa,
    press: na
}
  , Jn = ["initial", "animate", ...Object.keys(oa), "exit"];
var ia = 100
  , la = {
    left: r => `translateX(-${r}px)`,
    right: r => `translateX(${r}px)`,
    top: r => `translateY(-${r}px)`,
    bottom: r => `translateY(${r}px)`
}
  , gr = typeof Animation < "u" && typeof Animation.prototype.updatePlaybackRate == "function";
function ue(r) {
    let {slots: a, gap: n, padding: o, paddingPerSide: l, paddingTop: c, paddingRight: m, paddingBottom: x, paddingLeft: g, speed: i, hoverFactor: p, direction: h, alignment: v, sizingOptions: w, fadeOptions: b, style: L} = r
      , {fadeContent: F, overflow: O, fadeWidth: B, fadeInset: M, fadeAlpha: R} = b
      , {widthType: A, heightType: D} = w
      , u = l ? `${c}px ${m}px ${x}px ${g}px` : `${o}px`
      , T = de.current() === de.canvas
      , V = Xe.count(a)
      , z = V > 0;
    h === !0 && (h = "left");
    let G = h === "left" || h === "right"
      , q = Rr(0)
      , Ye = la[h]
      , pt = Lr(q, Ye)
      , le = X(null)
      , U = Q( () => [ar(), ar()], [])
      , [ee,gt] = Le({
        parent: null,
        children: null
    })
      , vr = []
      , Ke = []
      , we = 0
      , qe = 0;
    T && (we = V ? Math.floor(10 / V) : 0,
    qe = 1),
    !T && z && ee.parent && (we = Math.round(ee.parent / ee.children * 2) + 1,
    we = Math.min(we, ia),
    qe = 1);
    let Sr = Pr( () => {
        if (z && le.current) {
            let P = G ? le.current.offsetWidth : le.current.offsetHeight
              , S = U[0].current ? G ? U[0].current.offsetLeft : U[0].current.offsetTop : 0
              , W = (U[1].current ? G ? U[1].current.offsetLeft + U[1].current.offsetWidth : U[1].current.offsetTop + U[1].current.offsetHeight : 0) - S + n;
            gt({
                parent: P,
                children: W
            })
        }
    }
    , [])
      , Cr = T ? {
        contentVisibility: "auto"
    } : {};
    if (z) {
        if (!T) {
            let P = X(!0);
            be( () => (or.read(Sr),
            lt(le.current, ({contentSize: S}) => {
                !P.current && (S.width || S.height) && or.read(Sr),
                P.current = !1
            }
            )), [])
        }
        vr = Xe.map(a, (P, S) => {
            var Y, W, re, te;
            let ae;
            S === 0 && (ae = U[0]),
            S === a.length - 1 && (ae = U[1]);
            let fe = {
                width: A ? (Y = P.props) === null || Y === void 0 ? void 0 : Y.width : "100%",
                height: D ? (W = P.props) === null || W === void 0 ? void 0 : W.height : "100%"
            };
            return e(ne, {
                inherit: "id",
                children: e("li", {
                    ref: ae,
                    style: fe,
                    children: tr(P, {
                        style: {
                            ...(re = P.props) === null || re === void 0 ? void 0 : re.style,
                            ...fe,
                            flexShrink: 0,
                            ...Cr
                        },
                        layoutId: P.props.layoutId ? P.props.layoutId + "-original-" + S : void 0
                    }, (te = P.props) === null || te === void 0 ? void 0 : te.children)
                })
            })
        }
        )
    }
    if (!T)
        for (let P = 0; P < we; P++)
            Ke = [...Ke, ...Xe.map(a, (S, Y) => {
                var W, re, te, ae, fe, rr;
                let bt = {
                    width: A ? (W = S.props) === null || W === void 0 ? void 0 : W.width : "100%",
                    height: D ? (re = S.props) === null || re === void 0 ? void 0 : re.height : "100%"
                };
                return e(ne, {
                    inherit: "id",
                    children: e("li", {
                        style: bt,
                        "aria-hidden": !0,
                        children: tr(S, {
                            key: P + " " + Y,
                            style: {
                                ...(te = S.props) === null || te === void 0 ? void 0 : te.style,
                                width: A ? (ae = S.props) === null || ae === void 0 ? void 0 : ae.width : "100%",
                                height: D ? (fe = S.props) === null || fe === void 0 ? void 0 : fe.height : "100%",
                                flexShrink: 0,
                                ...Cr
                            },
                            layoutId: S.props.layoutId ? S.props.layoutId + "-dupe-" + P : void 0
                        }, (rr = S.props) === null || rr === void 0 ? void 0 : rr.children)
                    }, P + "li" + Y)
                }, P + "lg" + Y)
            }
            )];
    let j = ee.children + ee.children * Math.round(ee.parent / ee.children)
      , Qe = X(null)
      , Je = X(null)
      , Ae = X(0)
      , $e = X(!1)
      , Ir = Tr()
      , kr = X(null)
      , se = X(null);
    if (!T) {
        let P = Nr(le);
        gr ? be( () => {
            if (!(Ir || !j || !i))
                return se.current = kr.current.animate({
                    transform: [Ye(0), Ye(j)]
                }, {
                    duration: Math.abs(j) / i * 1e3,
                    iterations: 1 / 0,
                    easing: "linear"
                }),
                () => se.current.cancel()
        }
        , [p, j, i]) : Or(S => {
            if (!j || Ir || gr)
                return;
            Qe.current === null && (Qe.current = S),
            S = S - Qe.current;
            let W = (Je.current === null ? 0 : S - Je.current) * (i / 1e3);
            $e.current && (W *= p),
            Ae.current += W,
            Ae.current = _r(0, j, Ae.current),
            Je.current = S,
            P && q.set(Ae.current)
        }
        )
    }
    let ut = G ? "to right" : "to bottom"
      , Fr = B / 2
      , yt = 100 - B / 2
      , xt = da(M, 0, Fr)
      , wt = 100 - M
      , er = `linear-gradient(${ut}, rgba(0, 0, 0, ${R}) ${xt}%, rgba(0, 0, 0, 1) ${Fr}%, rgba(0, 0, 0, 1) ${yt}%, rgba(0, 0, 0, ${R}) ${wt}%)`;
    return z ? e("section", {
        style: {
            ...st,
            opacity: qe,
            WebkitMaskImage: F ? er : void 0,
            MozMaskImage: F ? er : void 0,
            maskImage: F ? er : void 0,
            overflow: O ? "visible" : "hidden",
            padding: u
        },
        ref: le,
        children: s(C.ul, {
            ref: kr,
            style: {
                ...st,
                gap: n,
                top: h === "bottom" && ft(j) ? -j : void 0,
                left: h === "right" && ft(j) ? -j : void 0,
                placeItems: v,
                position: "relative",
                flexDirection: G ? "row" : "column",
                ...L,
                transform: gr ? void 0 : pt,
                willChange: T ? "auto" : "transform"
            },
            onMouseEnter: () => {
                $e.current = !0,
                se.current && (se.current.playbackRate = p)
            }
            ,
            onMouseLeave: () => {
                $e.current = !1,
                se.current && (se.current.playbackRate = 1)
            }
            ,
            children: [vr, Ke]
        })
    }) : s("section", {
        style: sa,
        children: [e("div", {
            style: fa,
            children: "\u2728"
        }), e("p", {
            style: ca,
            children: "Connect to Content"
        }), e("p", {
            style: ma,
            children: "Add layers or components to infinitely loop on your page."
        })]
    })
}
ue.defaultProps = {
    gap: 10,
    padding: 10,
    sizingOptions: {
        widthType: !0,
        heightType: !0
    },
    fadeOptions: {
        fadeContent: !0,
        overflow: !1,
        fadeWidth: 25,
        fadeAlpha: 0,
        fadeInset: 0
    },
    direction: !0
};
he(ue, {
    slots: {
        type: y.Array,
        title: "Children",
        control: {
            type: y.ComponentInstance
        }
    },
    speed: {
        type: y.Number,
        title: "Speed",
        min: 0,
        max: 1e3,
        defaultValue: 100,
        unit: "%",
        displayStepper: !0,
        step: 5
    },
    direction: {
        type: y.Enum,
        title: "Direction",
        options: ["left", "right", "top", "bottom"],
        optionIcons: ["direction-left", "direction-right", "direction-up", "direction-down"],
        optionTitles: ["Left", "Right", "Top", "Bottom"],
        defaultValue: "left",
        displaySegmentedControl: !0
    },
    alignment: {
        type: y.Enum,
        title: "Align",
        options: ["flex-start", "center", "flex-end"],
        optionIcons: {
            direction: {
                right: ["align-top", "align-middle", "align-bottom"],
                left: ["align-top", "align-middle", "align-bottom"],
                top: ["align-left", "align-center", "align-right"],
                bottom: ["align-left", "align-center", "align-right"]
            }
        },
        defaultValue: "center",
        displaySegmentedControl: !0
    },
    gap: {
        type: y.Number,
        title: "Gap"
    },
    padding: {
        title: "Padding",
        type: y.FusedNumber,
        toggleKey: "paddingPerSide",
        toggleTitles: ["Padding", "Padding per side"],
        valueKeys: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"],
        valueLabels: ["T", "R", "B", "L"],
        min: 0
    },
    sizingOptions: {
        type: y.Object,
        title: "Sizing",
        controls: {
            widthType: {
                type: y.Boolean,
                title: "Width",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            },
            heightType: {
                type: y.Boolean,
                title: "Height",
                enabledTitle: "Auto",
                disabledTitle: "Stretch",
                defaultValue: !0
            }
        }
    },
    fadeOptions: {
        type: y.Object,
        title: "Clipping",
        controls: {
            fadeContent: {
                type: y.Boolean,
                title: "Fade",
                defaultValue: !0
            },
            overflow: {
                type: y.Boolean,
                title: "Overflow",
                enabledTitle: "Show",
                disabledTitle: "Hide",
                defaultValue: !1,
                hidden(r) {
                    return r.fadeContent === !0
                }
            },
            fadeWidth: {
                type: y.Number,
                title: "Width",
                defaultValue: 25,
                min: 0,
                max: 100,
                unit: "%",
                hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeInset: {
                type: y.Number,
                title: "Inset",
                defaultValue: 0,
                min: 0,
                max: 100,
                unit: "%",
                hidden(r) {
                    return r.fadeContent === !1
                }
            },
            fadeAlpha: {
                type: y.Number,
                title: "Opacity",
                defaultValue: 0,
                min: 0,
                max: 1,
                step: .05,
                hidden(r) {
                    return r.fadeContent === !1
                }
            }
        }
    },
    hoverFactor: {
        type: y.Number,
        title: "Hover",
        min: 0,
        max: 1,
        unit: "x",
        defaultValue: 1,
        step: .1,
        displayStepper: !0,
        description: "Slows down the speed while you are hovering."
    }
});
var st = {
    display: "flex",
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    placeItems: "center",
    margin: 0,
    padding: 0,
    listStyleType: "none",
    textIndent: "none"
}
  , sa = {
    display: "flex",
    width: "100%",
    height: "100%",
    placeContent: "center",
    placeItems: "center",
    flexDirection: "column",
    color: "#96F",
    background: "rgba(136, 85, 255, 0.1)",
    fontSize: 11,
    overflow: "hidden",
    padding: "20px 20px 30px 20px"
}
  , fa = {
    fontSize: 32,
    marginBottom: 10
}
  , ca = {
    margin: 0,
    marginBottom: 10,
    fontWeight: 600,
    textAlign: "center"
}
  , ma = {
    margin: 0,
    opacity: .7,
    maxWidth: 150,
    lineHeight: 1.5,
    textAlign: "center"
}
  , da = (r, a, n) => Math.min(Math.max(r, a), n)
  , ft = r => typeof r == "number" && !isNaN(r);
Gr.loadFonts([]);
var Ue = [{
    explicitInter: !0,
    fonts: []
}]
  , je = [".framer-CAnjt .framer-styles-preset-72a2un:not(.rich-text-wrapper), .framer-CAnjt .framer-styles-preset-72a2un.rich-text-wrapper a { --framer-link-current-text-decoration: none; --framer-link-hover-text-decoration: none; --framer-link-text-decoration: none; }"]
  , He = "framer-CAnjt";
var ha = {
    WdQe7v3f8: {
        hover: !0
    }
}
  , pa = ["WdQe7v3f8"]
  , ga = "framer-5bGmi"
  , ua = {
    WdQe7v3f8: "framer-v-1mxefle"
};
function mt(r, ...a) {
    let n = {};
    return a?.forEach(o => o && Object.assign(n, r[o])),
    n
}
var ya = {
    damping: 60,
    delay: 0,
    mass: 1,
    stiffness: 500,
    type: "spring"
}
  , xa = ({value: r, children: a}) => {
    let n = Ar(nr)
      , o = r ?? n.transition
      , l = Q( () => ({
        ...n,
        transition: o
    }), [JSON.stringify(o)]);
    return e(nr.Provider, {
        value: l,
        children: a
    })
}
  , wa = C(t)
  , ba = ({height: r, id: a, link: n, title: o, width: l, ...c}) => {
    var m;
    return {
        ...c,
        C1D3GtbOK: n ?? c.C1D3GtbOK,
        ETIfmI3WT: (m = o ?? c.ETIfmI3WT) !== null && m !== void 0 ? m : "Telegram"
    }
}
  , va = (r, a) => a.join("-") + r.layoutDependency
  , Sa = ce(function(r, a) {
    let {activeLocale: n, setLocale: o} = Oe()
      , {style: l, className: c, layoutId: m, variant: x, ETIfmI3WT: g, C1D3GtbOK: i, ...p} = ba(r)
      , {baseVariant: h, classNames: v, gestureVariant: w, setGestureState: b, setVariant: L, variants: F} = Er({
        cycleOrder: pa,
        defaultVariant: "WdQe7v3f8",
        enabledGestures: ha,
        variant: x,
        variantClassNames: ua
    })
      , O = va(r, F)
      , B = X(null)
      , M = Re()
      , R = [He]
      , A = Br();
    return e(ne, {
        id: m ?? M,
        children: e(wa, {
            animate: F,
            initial: !1,
            children: e(xa, {
                value: ya,
                children: e(C.div, {
                    ...p,
                    className: Se(ga, ...R, "framer-1mxefle", c, v),
                    "data-framer-name": "Variant 1",
                    layoutDependency: O,
                    layoutId: "WdQe7v3f8",
                    onHoverEnd: () => b({
                        isHovered: !1
                    }),
                    onHoverStart: () => b({
                        isHovered: !0
                    }),
                    onTap: () => b({
                        isPressed: !1
                    }),
                    onTapCancel: () => b({
                        isPressed: !1
                    }),
                    onTapStart: () => b({
                        isPressed: !0
                    }),
                    ref: a ?? B,
                    style: {
                        backgroundColor: "#73c9ff",
                        ...l
                    },
                    variants: {
                        "WdQe7v3f8-hover": {
                            backgroundColor: "rgb(255, 255, 255)"
                        }
                    },
                    ...mt({
                        "WdQe7v3f8-hover": {
                            "data-framer-name": void 0
                        }
                    }, h, w),
                    children: e(d, {
                        __fromCanvasComponent: !0,
                        children: e(t, {
                            children: e(C.p, {
                                style: {
                                    "--font-selector": "RlM7U2F0b3NoaS1ib2xk",
                                    "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                    "--framer-font-size": "20px",
                                    "--framer-font-weight": "700",
                                    "--framer-line-height": "1em",
                                    "--framer-text-alignment": "center",
                                    "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))"
                                },
                                children: e(k, {
                                    href: i,
                                    openInNewTab: !0,
                                    smoothScroll: !1,
                                    children: e(C.a, {
                                        className: "framer-styles-preset-72a2un",
                                        "data-styles-preset": "kyo9KHVc6",
                                        children: "Telegram"
                                    })
                                })
                            })
                        }),
                        className: "framer-zysxw7",
                        fonts: ["FS;Satoshi-bold"],
                        layoutDependency: O,
                        layoutId: "fTfYf0bbJ",
                        style: {
                            "--extracted-r6o4lv": "rgb(255, 255, 255)"
                        },
                        text: g,
                        variants: {
                            "WdQe7v3f8-hover": {
                                "--extracted-r6o4lv": "#73c9ff"
                            }
                        },
                        verticalAlignment: "top",
                        withExternalLayout: !0,
                        ...mt({
                            "WdQe7v3f8-hover": {
                                children: e(t, {
                                    children: e(C.p, {
                                        style: {
                                            "--font-selector": "RlM7U2F0b3NoaS1ib2xk",
                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "700",
                                            "--framer-line-height": "1em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "var(--extracted-r6o4lv, #73c9ff)"
                                        },
                                        children: e(k, {
                                            href: i,
                                            openInNewTab: !0,
                                            smoothScroll: !1,
                                            children: e(C.a, {
                                                className: "framer-styles-preset-72a2un",
                                                "data-styles-preset": "kyo9KHVc6",
                                                children: "Telegram"
                                            })
                                        })
                                    })
                                })
                            }
                        }, h, w)
                    })
                })
            })
        })
    })
})
  , Ca = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-5bGmi.framer-1pq8ya5, .framer-5bGmi .framer-1pq8ya5 { display: block; }", ".framer-5bGmi.framer-1mxefle { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 37px 10px 37px; position: relative; width: min-content; }", ".framer-5bGmi .framer-zysxw7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5bGmi.framer-1mxefle { gap: 0px; } .framer-5bGmi.framer-1mxefle > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-5bGmi.framer-1mxefle > :first-child { margin-left: 0px; } .framer-5bGmi.framer-1mxefle > :last-child { margin-right: 0px; } }", ...je]
  , Fe = _e(Sa, Ca, "framer-5bGmi")
  , ye = Fe;
Fe.displayName = "button";
Fe.defaultProps = {
    height: 40,
    width: 160
};
he(Fe, {
    ETIfmI3WT: {
        defaultValue: "Telegram",
        displayTextArea: !1,
        title: "Title",
        type: y.String
    },
    C1D3GtbOK: {
        title: "Link",
        type: y.Link
    }
});
Ne(Fe, [{
    explicitInter: !0,
    fonts: [{
        family: "Satoshi",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/LAFFD4SDUCDVQEXFPDC7C53EQ4ZELWQI/PXCT3G6LO6ICM5I3NTYENYPWJAECAWDD/GHM6WVH6MILNYOOCXHXB5GTSGNTMGXZR.woff2",
        weight: "700"
    }]
}, ...Me(Ue)], {
    supportsExplicitInterCodegen: !0
});
var xe = Te(ir)
  , Ia = Be(E)
  , ka = Be(ue)
  , Fa = Te(d)
  , Pa = Te(C.div)
  , Aa = Be(ye);
var Xa = {
    AInDkfxQO: "(max-width: 809px)",
    CzB_Ri4kE: "(min-width: 1440px) and (max-width: 1919px)",
    eVc1_vAod: "(min-width: 810px) and (max-width: 1199px)",
    wFNTSY3sV: "(min-width: 1920px)",
    WQLkyLRf1: "(min-width: 1200px) and (max-width: 1439px)"
}
  , ur = () => typeof document < "u"
  , dt = "framer-Xo6nI"
  , Ra = {
    AInDkfxQO: "framer-v-obpi3w",
    CzB_Ri4kE: "framer-v-19zrzkq",
    eVc1_vAod: "framer-v-nou40q",
    wFNTSY3sV: "framer-v-4aoh7u",
    WQLkyLRf1: "framer-v-72rtr7"
}
  , La = {
    delay: 0,
    duration: 2,
    ease: [.44, 0, .56, 1],
    type: "tween"
}
  , Oa = {
    opacity: 1,
    rotate: 1,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , K = {
    damping: 30,
    delay: 0,
    mass: 1,
    stiffness: 400,
    type: "spring"
}
  , $ = {
    opacity: .5,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: K
}
  , ht = {
    damping: 30,
    delay: 0,
    mass: 1,
    stiffness: 57,
    type: "spring"
}
  , Ta = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ht,
    x: 0,
    y: 150
}
  , yr = {
    opacity: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: ht,
    x: 0,
    y: 0
}
  , xr = {
    opacity: .001,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 150
}
  , wr = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 150,
    y: 0
}
  , br = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: K,
    x: 150,
    y: 0
}
  , _a = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: 0,
    y: 0
}
  , Na = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: K,
    x: 0,
    y: 0
}
  , Ba = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    x: -150,
    y: 0
}
  , Ma = {
    opacity: 0,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0,
    transition: K,
    x: -150,
    y: 0
}
  , Pe = lr()
  , Da = {
    1440: "CzB_Ri4kE",
    1920: "wFNTSY3sV",
    Desktop: "WQLkyLRf1",
    Phone: "AInDkfxQO",
    Tablet: "eVc1_vAod"
}
  , za = ({height: r, id: a, width: n, ...o}) => {
    var l, c;
    return {
        ...o,
        variant: (c = (l = Da[o.variant]) !== null && l !== void 0 ? l : o.variant) !== null && c !== void 0 ? c : "WQLkyLRf1"
    }
}
  , Ea = ce(function(r, a) {
    let {activeLocale: n, setLocale: o} = Oe()
      , {style: l, className: c, layoutId: m, variant: x, ...g} = za(r);
    Xr( () => {
        let z = lr(void 0, n);
        if (document.title = z.title || "",
        z.viewport) {
            var G;
            (G = document.querySelector('meta[name="viewport"]')) === null || G === void 0 || G.setAttribute("content", z.viewport)
        }
        if (z.bodyClassName)
            return Array.from(document.body.classList).filter(q => q.startsWith("framer-body-")).map(q => document.body.classList.remove(q)),
            document.body.classList.add(`${z.bodyClassName}-framer-Xo6nI`),
            () => {
                document.body.classList.remove(`${z.bodyClassName}-framer-Xo6nI`)
            }
    }
    , [void 0, n]);
    let[i,p] = zr(x, Xa, !1)
      , h = void 0
      , v = X(null)
      , w = () => ["AInDkfxQO", "eVc1_vAod"].includes(i) ? !ur() : !0
      , b = () => ["AInDkfxQO", "eVc1_vAod"].includes(i) ? !0 : !ur()
      , L = () => i === "AInDkfxQO" ? !0 : !ur()
      , F = ve("mlakVCiPs")
      , O = X(null)
      , B = ve("cy0wHCQcG")
      , M = X(null)
      , R = ve("jUFl27kr9")
      , A = X(null)
      , D = ve("ce_tysghM")
      , u = X(null)
      , T = Re()
      , V = [He];
    return Mr({}),
    e(Dr.Provider, {
        value: {
            primaryVariantId: "WQLkyLRf1",
            variantClassNames: Ra
        },
        children: s(ne, {
            id: m ?? T,
            children: [s(C.div, {
                ...g,
                className: Se(dt, ...V, "framer-72rtr7", c),
                ref: a ?? v,
                style: {
                    ...l
                },
                children: [s("div", {
                    className: "framer-15dvlek",
                    children: [s("div", {
                        className: "framer-i6750o",
                        children: [e(f, {
                            breakpoint: i,
                            overrides: {
                                AInDkfxQO: {
                                    children: s(t, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "58px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)",
                                                "position": "relative",
                                                "top": "60px",
                                            },
                                            children: "SOLMAN"
                                        }),]
                                    })
                                },
                                eVc1_vAod: {
                                    children: s(t, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "190px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "SOLMAN "
                                        }), ]
                                    })
                                },
                                wFNTSY3sV: {
                                    children: s(t, {
                                        children: [e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "325px",
                                                "--framer-line-height": "0.8em",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "SOLMAN "
                                        }), ]
                                    })
                                }
                            },
                            children: e(d, {
                                __fromCanvasComponent: !0,
                                children: s(t, {
                                    children: [e("p", {
                                        style: {
                                            "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                            "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                            "--framer-font-size": "200px",
                                            "--framer-line-height": "0.8em",
                                            "--framer-text-color": "rgb(255, 255, 255)",
                                            "position": "relative",
                                            "top": "60px",
                                        },
                                        children: "SOLMAN "
                                    }), ]
                                }),
                                className: "framer-1u87dxm",
                                fonts: ["GF;Paytone One-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), w() && e(xe, {
                            __framer__loop: Oa,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: "mirror",
                            __framer__loopTransition: La,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 729,
                                intrinsicWidth: 537.5,
                                pixelHeight: 1458,
                                pixelWidth: 1075,
                                sizes: "362px",
                                src: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024",
                                srcSet: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024 755w,./framerusercontent.com/images/hero.PNG 1075w"
                            },
                            className: "framer-7mtqmk hidden-obpi3w hidden-nou40q",
                            "data-framer-name": "Group_5",
                            name: "Group_5"
                        }), e(f, {
                            breakpoint: i,
                            overrides: {
                                AInDkfxQO: {
                                    children: s(t, {
                                        children: [e("p", {
                                          
                                            
                                        }), e("p", {
                                         
                                        }), e("p", {
                                          
                                            
                                        })]
                                    })
                                },
                                eVc1_vAod: {
                                    children: s(t, {
                                        children: [e("p", {
                                          
                                           
                                        }), e("p", {
                                          
                                          
                                        }), e("p", {
                                         
                                            
                                        })]
                                    })
                                },
                                wFNTSY3sV: {
                                    children: s(t, {
                                        children: [e("p", {
                                          
                                           
                                        }), e("p", {
                                         
                                            
                                        })]
                                    })
                                }
                            },
                            children: e(d, {
                                __fromCanvasComponent: !0,
                                children: s(t, {
                                    children: [e("p", {
                                       
                                    }), e("p", {
                                       
                                    })]
                                }),
                                className: "framer-10p2vyu",
                                fonts: ["GF;Paytone One-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), b() && s("div", {
                            className: "framer-dmrin1 hidden-72rtr7 hidden-19zrzkq hidden-4aoh7u",
                            children: [s(C.div, {
                                className: "framer-1mcnaw7",
                                whileHover: $,
                                children: [e(H, {
                                    children: e(Z, {
                                        className: "framer-11fs353-container",
                                        children: e(E, {
                                            color: "rgb(255, 255, 255)",
                                            height: "100%",
                                            iconSearch: "Home",
                                            iconSelection: "Telegram",
                                            iconStyle15: "Filled",
                                            iconStyle2: "Filled",
                                            iconStyle7: "Filled",
                                            id: "TL6J5h26q",
                                            layoutId: "TL6J5h26q",
                                            mirrored: !1,
                                            selectByList: !0,
                                            style: {
                                                height: "100%",
                                                width: "100%"
                                            },
                                            width: "100%"
                                        })
                                    })
                                }), e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        AInDkfxQO: {
                                            href: "https://t.me/solmonfun"
                                        }
                                    },
                                    children: e(k, {
                                        children: s(C.a, {
                                            className: "framer-8djxin framer-lux5qc",
                                            whileHover: $,
                                            children: [e(H, {
                                                
                                            }), e(f, {
                                                breakpoint: i,
                                                overrides: {
                                                    AInDkfxQO: {
                                                        children: e(t, {
                                                            children: e("p", {
                                                                style: {
                                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                                    "--framer-font-size": "18px",
                                                                    "--framer-font-weight": "900",
                                                                    "--framer-line-height": "0.8em",
                                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                                },
                                                                children: "TELEGRAM"
                                                            })
                                                        })
                                                    }
                                                },
                                                children: e(d, {
                                                    __fromCanvasComponent: !0,
                                                    children: e(t, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                                "--framer-font-size": "20px",
                                                                "--framer-font-weight": "900",
                                                                "--framer-line-height": "0.8em",
                                                                "--framer-text-color": "rgb(255, 255, 255)"
                                                            },
                                                            children: "TELEGRAM"
                                                        })
                                                    }),
                                                    className: "framer-zz83up",
                                                    fonts: ["FS;Satoshi-black"],
                                                    verticalAlignment: "top",
                                                    withExternalLayout: !0
                                                })
                                            })]
                                        })
                                    })
                                })]
                            }), e(f, {
                                breakpoint: i,
                                overrides: {
                                    AInDkfxQO: {
                                        href: "https://x.com/solmonfun"
                                    }
                                },
                                children: e(k, {
                                    children: s(C.a, {
                                        className: "framer-8djxin framer-lux5qc",
                                        whileHover: $,
                                        children: [e(H, {
                                            children: e(Z, {
                                                className: "framer-d6rxpy-container",
                                                children: e(E, {
                                                    color: "rgb(255, 255, 255)",
                                                    height: "100%",
                                                    iconSearch: "Home",
                                                    iconSelection: "Twitter",
                                                    iconStyle15: "Filled",
                                                    iconStyle2: "Filled",
                                                    iconStyle7: "Filled",
                                                    id: "vfBVowuas",
                                                    layoutId: "vfBVowuas",
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: {
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        }), e(f, {
                                            breakpoint: i,
                                            overrides: {
                                                AInDkfxQO: {
                                                    children: e(t, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                                "--framer-font-size": "18px",
                                                                "--framer-font-weight": "900",
                                                                "--framer-line-height": "0.8em",
                                                                "--framer-text-color": "rgb(255, 255, 255)"
                                                            },
                                                            children: "TWITTER"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(d, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "20px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "0.8em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "TWITTER"
                                                    })
                                                }),
                                                className: "framer-x61dk9",
                                                fonts: ["FS;Satoshi-black"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })
                                })
                            })]
                        })]
                    }), w() && e(f, {
                        breakpoint: i,
                        overrides: {
                            CzB_Ri4kE: {
                                "data-framer-appear-id": "1nnv78o",
                                animate: oe("animate", "1nnv78o", yr, "19zrzkq"),
                                initial: oe("initial", "1nnv78o", xr, "19zrzkq")
                            },
                            wFNTSY3sV: {
                                "data-framer-appear-id": "2lc982",
                                animate: oe("animate", "2lc982", yr, "4aoh7u"),
                                initial: oe("initial", "2lc982", xr, "4aoh7u")
                            }
                        },
                        children: s(C.div, {
                            animate: oe("animate", "qjykua", yr, "72rtr7"),
                            className: "framer-qjykua hidden-obpi3w hidden-nou40q",
                            "data-framer-appear-id": "qjykua",
                            "data-framer-name": "Socials OG",
                            exit: Ta,
                            initial: oe("initial", "qjykua", xr, "72rtr7"),
                            name: "Socials OG",
                            children: [s("div", {
                                className: "framer-llcgay",
                                children: [e(k, {
                                    href: "https://t.me/solmonfun",
                                    children: s(C.a, {
                                        className: "framer-mppc7z framer-lux5qc",
                                        whileHover: $,
                                        children: [e(H, {
                                            children: e(Z, {
                                                className: "framer-h5v0mc-container",
                                                children: e(E, {
                                                    color: "rgb(255, 255, 255)",
                                                    height: "100%",
                                                    iconSearch: "Home",
                                                    iconSelection: "Telegram",
                                                    iconStyle15: "Filled",
                                                    iconStyle2: "Filled",
                                                    iconStyle7: "Filled",
                                                    id: "JwXIacGjL",
                                                    layoutId: "JwXIacGjL",
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: {
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        }), e(f, {
                                            breakpoint: i,
                                            overrides: {
                                                wFNTSY3sV: {
                                                    children: e(t, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                                "--framer-font-size": "25px",
                                                                "--framer-font-weight": "900",
                                                                "--framer-line-height": "0.8em",
                                                                "--framer-text-color": "rgb(255, 255, 255)"
                                                            },
                                                            children: "TELEGRAM"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(d, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "20px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "0.8em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "TELEGRAM"
                                                    })
                                                }),
                                                className: "framer-vw62qj",
                                                fonts: ["FS;Satoshi-black"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })
                                }), e(k, {
                                    href: "https://x.com/solmonfun",
                                    children: s(C.a, {
                                        className: "framer-1cpqo0y framer-lux5qc",
                                        whileHover: $,
                                        children: [e(H, {
                                            children: e(Z, {
                                                className: "framer-iss8an-container",
                                                children: e(E, {
                                                    color: "rgb(255, 255, 255)",
                                                    height: "100%",
                                                    iconSearch: "Home",
                                                    iconSelection: "Twitter",
                                                    iconStyle15: "Filled",
                                                    iconStyle2: "Filled",
                                                    iconStyle7: "Filled",
                                                    id: "hZo1bCy52",
                                                    layoutId: "hZo1bCy52",
                                                    mirrored: !1,
                                                    selectByList: !0,
                                                    style: {
                                                        height: "100%",
                                                        width: "100%"
                                                    },
                                                    width: "100%"
                                                })
                                            })
                                        }), e(f, {
                                            breakpoint: i,
                                            overrides: {
                                                wFNTSY3sV: {
                                                    children: e(t, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                                "--framer-font-size": "25px",
                                                                "--framer-font-weight": "900",
                                                                "--framer-line-height": "0.8em",
                                                                "--framer-text-color": "rgb(255, 255, 255)"
                                                            },
                                                            children: "TWITTER"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(d, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "20px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "0.8em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "TWITTER"
                                                    })
                                                }),
                                                className: "framer-fgm2nm",
                                                fonts: ["FS;Satoshi-black"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })
                                }), e(k, {
                                    href: "https://pump.fun/nNZWnzJQs9oMDAX2LXgFCmMoK8adZ5D1LbUQattpump",
                                    openInNewTab: !0,
                                    children: s(C.a, {
                                        className: "framer-hhy3o0 framer-lux5qc",
                                        whileHover: $,
                                        children: [e(ie, {
                                            className: "framer-qzw5pa",
                                            "data-framer-name": "graphic",
                                            layout: "position",
                                            name: "graphic",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><path d="M 1.632 1.147 C 1.743 1.224 1.848 1.302 1.951 1.377 C 2.192 1.556 2.419 1.724 2.668 1.846 C 2.818 1.92 3.119 1.87 3.249 1.752 C 5.837 -0.581 9.171 -0.584 11.716 1.744 C 11.846 1.863 12.143 1.921 12.295 1.851 C 12.538 1.737 12.761 1.576 12.999 1.404 C 13.1 1.331 13.204 1.255 13.313 1.181 C 13.285 1.244 13.26 1.305 13.235 1.366 C 13.182 1.494 13.13 1.617 13.063 1.73 C 12.005 3.532 10.499 4.825 8.741 5.823 C 8.632 5.886 8.428 5.852 8.305 5.788 C 7.755 5.501 7.221 5.504 6.671 5.786 C 6.546 5.85 6.343 5.888 6.236 5.827 C 4.455 4.807 2.923 3.497 1.867 1.653 C 1.808 1.55 1.76 1.439 1.71 1.322 C 1.685 1.265 1.66 1.207 1.632 1.148 L 1.632 1.147 Z M 0.001 15.398 L 0.003 15.396 C 1.252 12.705 1.38 9.876 1.307 7.012 C 1.281 6.001 1.449 5.029 1.847 4.105 C 1.901 3.979 1.963 3.855 2.03 3.718 C 2.06 3.656 2.092 3.592 2.125 3.523 C 2.205 3.621 2.284 3.716 2.361 3.81 C 2.603 4.101 2.833 4.38 3.055 4.667 C 3.101 4.729 3.1 4.882 3.061 4.958 C 2.287 6.44 3.265 7.956 4.866 8.07 C 4.914 8.075 4.961 8.084 5.006 8.097 L 5.053 8.108 C 5.201 8.804 4.92 9.196 4.336 9.458 C 4.048 9.586 3.778 9.76 3.488 9.947 C 3.35 10.037 3.211 10.125 3.071 10.211 C 3.196 10.286 3.32 10.363 3.443 10.441 C 3.705 10.605 3.952 10.76 4.213 10.885 C 4.962 11.244 5.49 11.834 5.777 12.605 C 6.158 13.63 6.503 14.67 6.848 15.71 C 6.97 16.079 7.092 16.447 7.216 16.815 C 7.232 16.862 7.247 16.909 7.262 16.956 C 7.331 17.169 7.4 17.383 7.532 17.592 C 7.601 17.354 7.667 17.115 7.733 16.876 C 7.88 16.347 8.026 15.818 8.195 15.297 C 8.468 14.46 8.766 13.631 9.091 12.812 C 9.445 11.922 10.007 11.22 10.878 10.816 C 11.106 10.71 11.321 10.577 11.557 10.432 C 11.675 10.359 11.795 10.286 11.915 10.216 C 11.759 10.121 11.61 10.024 11.464 9.931 C 11.145 9.726 10.843 9.532 10.521 9.387 C 9.948 9.129 9.82 8.702 9.921 8.118 C 10.005 8.099 10.089 8.083 10.174 8.066 C 10.363 8.03 10.554 7.993 10.738 7.932 C 11.948 7.535 12.484 6.367 11.987 5.16 C 11.861 4.851 11.881 4.663 12.106 4.432 C 12.281 4.253 12.433 4.051 12.598 3.833 C 12.672 3.733 12.749 3.632 12.832 3.526 C 13.227 4.18 13.484 4.869 13.559 5.6 C 13.645 6.433 13.659 7.276 13.657 8.113 C 13.653 9.659 13.705 11.199 14.112 12.693 C 14.283 13.318 14.493 13.932 14.708 14.56 C 14.806 14.844 14.904 15.13 15 15.423 L 14.1 14.669 L 14.065 14.64 L 13.054 13.794 L 12.04 15.495 L 11.558 16.303 C 11.036 15.795 10.515 15.287 9.993 14.778 L 9.035 16.394 L 9.027 16.408 C 8.522 17.26 8.015 18.116 7.49 19 C 6.965 18.115 6.45 17.248 5.932 16.376 L 5.923 16.36 L 4.984 14.779 C 4.651 15.102 4.331 15.415 4.002 15.734 L 4 15.736 L 3.418 16.303 L 2.854 15.354 L 2.853 15.354 L 2.844 15.337 C 2.541 14.827 2.238 14.319 1.927 13.795 L 1.466 14.178 C 0.971 14.59 0.486 14.993 0.003 15.396 L 0 15.401 L 0.001 15.397 Z M 9.861 10.213 L 9.863 10.211 L 9.861 10.213 Z M 9.861 10.213 C 9.861 10.213 9.861 10.213 9.861 10.213 Z M 7.568 14.035 L 7.49 14.287 C 7.455 14.179 7.421 14.071 7.387 13.964 L 7.386 13.963 C 6.913 12.462 6.468 11.048 5.021 10.163 C 6.032 9.95 6.083 9.242 6.091 8.458 C 6.096 7.873 6.325 7.339 6.763 6.933 C 7.24 6.49 7.725 6.484 8.201 6.924 C 8.731 7.415 8.946 8.07 8.902 8.768 C 8.861 9.423 9.064 9.833 9.644 10.059 C 9.688 10.075 9.726 10.107 9.776 10.147 C 9.801 10.167 9.829 10.189 9.861 10.213 C 8.488 11.067 8.044 12.498 7.568 14.035 Z M 5.831 6.78 C 5.247 7.128 4.528 7.088 4.106 6.694 C 3.758 6.369 3.726 5.982 3.925 5.529 L 4.67 6.018 L 4.67 6.019 Z M 9.148 6.782 C 9.463 6.574 9.776 6.367 10.093 6.158 L 11.049 5.526 L 11.049 5.528 C 11.241 5.99 11.218 6.374 10.865 6.699 C 10.442 7.087 9.729 7.125 9.148 6.782 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                            svgContentId: 3252224793,
                                            withExternalLayout: !0
                                        }), e(f, {
                                            breakpoint: i,
                                            overrides: {
                                                wFNTSY3sV: {
                                                    children: e(t, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                                "--framer-font-size": "25px",
                                                                "--framer-font-weight": "900",
                                                                "--framer-line-height": "0.8em",
                                                                "--framer-text-color": "rgb(255, 255, 255)"
                                                            },
                                                            children: "PUMP.FUN"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(d, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "20px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "0.8em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "PUMP.FUN"
                                                    })
                                                }),
                                                className: "framer-vkuqrn",
                                                fonts: ["FS;Satoshi-black"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })
                                }), e(k, {
                                    href: "#",
                                    openInNewTab: !0,
                                    children: s(C.a, {
                                        className: "framer-1xwjx91 framer-lux5qc",
                                        whileHover: $,
                                        children: [e(ie, {
                                            className: "framer-ep6lz6",
                                            "data-framer-name": "graphic",
                                            layout: "position",
                                            name: "graphic",
                                            opacity: 1,
                                            svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 17"><path d="M 5.207 0.955 C 4.25 1.482 3.463 1.926 3.466 1.944 C 3.466 1.992 5.767 3.218 5.848 3.215 C 5.884 3.215 6.153 3.082 6.446 2.925 L 6.979 2.638 L 7.56 2.953 L 8.14 3.269 L 9.092 2.817 C 10.523 2.14 10.673 2.064 10.648 2.043 C 10.618 2.008 10.103 1.718 8.709 0.946 C 8.224 0.678 7.74 0.407 7.258 0.132 C 7.132 0.057 7.012 0 6.991 0 C 6.97 0 6.165 0.429 5.208 0.955 Z M 1.002 3.25 L 0.003 3.792 L 0.003 6.174 C 0.003 7.485 0.015 8.557 0.033 8.557 C 0.048 8.557 0.539 8.333 1.125 8.059 L 2.188 7.561 L 2.188 5.049 L 2.705 5.345 C 3.107 5.575 3.504 5.802 3.905 6.032 L 4.588 6.42 L 4.891 6.275 C 5.08 6.184 5.27 6.093 5.459 6.001 C 5.606 5.928 5.965 5.758 6.258 5.622 C 6.551 5.487 6.821 5.348 6.859 5.317 C 6.91 5.276 6.288 4.913 4.558 3.977 C 3.253 3.271 2.143 2.698 2.092 2.701 C 2.041 2.704 1.55 2.95 1.002 3.249 Z M 10.825 3.401 C 10.146 3.726 9.589 4.003 9.589 4.019 C 9.589 4.034 9.96 4.268 10.412 4.535 C 10.867 4.803 11.235 5.037 11.235 5.056 C 11.235 5.075 10.834 5.279 10.343 5.509 C 9.852 5.743 8.613 6.332 7.587 6.82 L 4.154 8.456 C 3.289 8.866 2.511 9.238 2.424 9.279 C 0.661 10.12 0.174 10.354 0.107 10.394 C 0.042 10.435 0.027 10.669 0.015 11.844 L 0 13.247 L 0.891 13.726 L 1.784 14.205 L 3.023 13.616 C 3.702 13.291 4.262 13.01 4.262 12.989 C 4.262 12.966 4.136 12.881 3.984 12.796 C 3.831 12.711 3.513 12.522 3.277 12.377 C 3.044 12.232 2.81 12.099 2.759 12.08 C 2.708 12.061 2.666 12.033 2.666 12.011 C 2.666 11.992 3.211 11.718 3.879 11.406 C 5.172 10.798 6.159 10.328 8.281 9.317 C 9.23 8.866 10.179 8.412 11.13 7.961 C 11.849 7.62 12.567 7.276 13.285 6.931 L 13.922 6.621 L 13.938 5.203 L 13.952 3.785 L 13.049 3.3 C 12.552 3.032 12.124 2.812 12.103 2.812 C 12.079 2.812 11.504 3.079 10.825 3.401 Z M 13.683 8.519 C 13.548 8.588 13.285 8.718 13.096 8.806 C 12.831 8.931 12.565 9.057 12.3 9.184 L 11.849 9.402 L 11.839 10.647 C 11.834 11.33 11.81 11.888 11.786 11.885 C 11.732 11.876 10.885 11.419 10.032 10.936 C 9.416 10.59 9.376 10.574 9.233 10.65 C 9.149 10.694 8.649 10.93 8.122 11.173 C 7.596 11.419 7.147 11.633 7.126 11.655 C 7.105 11.674 8.165 12.279 9.484 13.001 L 11.878 14.312 L 12.902 13.754 C 13.465 13.448 13.943 13.168 13.964 13.133 C 14.015 13.055 14.01 8.384 13.961 8.39 C 13.94 8.393 13.815 8.45 13.683 8.519 Z M 8.015 14 C 7.837 14.08 7.659 14.16 7.482 14.243 C 6.946 14.485 7.051 14.495 6.413 14.161 C 5.989 13.937 5.806 13.871 5.725 13.902 C 5.666 13.928 5.154 14.17 4.585 14.441 C 4.019 14.712 3.534 14.936 3.511 14.936 C 3.271 14.936 3.669 15.185 5.195 15.995 L 6.985 16.947 L 7.739 16.556 C 8.153 16.342 8.991 15.91 9.595 15.598 C 10.202 15.286 10.69 15.024 10.681 15.012 C 10.673 15.003 10.163 14.728 9.55 14.4 L 8.437 13.808 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                            svgContentId: 941445431,
                                            withExternalLayout: !0
                                        }), e(f, {
                                            breakpoint: i,
                                            overrides: {
                                                wFNTSY3sV: {
                                                    children: e(t, {
                                                        children: e("p", {
                                                            style: {
                                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                                "--framer-font-size": "25px",
                                                                "--framer-font-weight": "900",
                                                                "--framer-line-height": "0.8em",
                                                                "--framer-text-color": "rgb(255, 255, 255)"
                                                            },
                                                            children: "DESCREENER SOON"
                                                        })
                                                    })
                                                }
                                            },
                                            children: e(d, {
                                                __fromCanvasComponent: !0,
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "20px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "0.8em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "DESCREENER SOON"
                                                    })
                                                }),
                                                className: "framer-z0nllr",
                                                fonts: ["FS;Satoshi-black"],
                                                verticalAlignment: "top",
                                                withExternalLayout: !0
                                            })
                                        })]
                                    })
                                })]
                            }), s("div", {
                                className: "framer-15pk6g",
                                children: [e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        wFNTSY3sV: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                        "--framer-font-family": '"Satoshi", sans-serif',
                                                        "--framer-font-size": "25px",
                                                        "--framer-font-weight": "900",
                                                        "--framer-line-height": "0.8em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    
                                                })
                                            })
                                        }
                                    },
                                    children: e(d, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                    "--framer-font-size": "20px",
                                                    "--framer-font-weight": "900",
                                                    "--framer-line-height": "0.8em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                
                                            })
                                        }),
                                        className: "framer-1ouri5e",
                                        fonts: ["FS;Satoshi-black"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        wFNTSY3sV: {
                                            
                                        }
                                    },
                                    children: e(ie, {
                                        className: "framer-k9ch8q",
                                        "data-framer-name": "graphic",
                                        layout: "position",
                                        name: "graphic",
                                        opacity: 1,
                                        
                                        withExternalLayout: !0
                                    })
                                })]
                            })]
                        })
                    }), b() && s("div", {
                        className: "framer-fxx7z3 hidden-72rtr7 hidden-19zrzkq hidden-4aoh7u",
                        children: [e(d, {
                            __fromCanvasComponent: !0,
                            children: e(t, {
                                children: e("p", {
                                    style: {
                                        "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                        "--framer-font-family": '"Satoshi", sans-serif',
                                        "--framer-font-size": "15px",
                                        "--framer-font-weight": "900",
                                        "--framer-line-height": "0.8em",
                                        "--framer-text-color": "rgb(255, 255, 255)"
                                    },
                                   
                                })
                            }),
                            className: "framer-1149p1t",
                            fonts: ["FS;Satoshi-black"],
                            verticalAlignment: "top",
                            withExternalLayout: !0
                        }), e(f, {
                            breakpoint: i,
                            overrides: {
                                AInDkfxQO: {
                                    svgContentId: 2934729282
                                },
                                eVc1_vAod: {
                                    svgContentId: 2934729282
                                }
                            },
                            children: e(ie, {
                                className: "framer-vgmcpj",
                                "data-framer-name": "graphic",
                                layout: "position",
                                name: "graphic",
                                opacity: 1,
                               
                                withExternalLayout: !0
                            })
                        })]
                    }), b() && e(f, {
                        breakpoint: i,
                        overrides: {
                            AInDkfxQO: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 729,
                                    intrinsicWidth: 537.5,
                                    pixelHeight: 1458,
                                    pixelWidth: 1075,
                                    sizes: "179px",
                                    src: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024",
                                    srcSet: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024 755w,./framerusercontent.com/images/hero.PNG 1075w"
                                }
                            },
                            eVc1_vAod: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 729,
                                    intrinsicWidth: 537.5,
                                    pixelHeight: 1458,
                                    pixelWidth: 1075,
                                    sizes: "159px",
                                    src: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024",
                                    srcSet: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024 755w,./framerusercontent.com/images/hero.PNG 1075w"
                                }
                            }
                        },
                        children: e(xe, {
                            __framer__animate: {
                                transition: K
                            },
                            __framer__animateOnce: !1,
                            __framer__enter: wr,
                            __framer__exit: br,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 729,
                                intrinsicWidth: 537.5,
                                pixelHeight: 1458,
                                pixelWidth: 1075,
                                src: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024",
                                srcSet: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024 755w,./framerusercontent.com/images/hero.PNG 1075w"
                            },
                            className: "framer-hz7jyh hidden-72rtr7 hidden-19zrzkq hidden-4aoh7u",
                            "data-framer-name": "Group_5",
                            name: "Group_5"
                        })
                    }), L() && s("div", {
                        className: "framer-1bmeaj5 hidden-72rtr7 hidden-19zrzkq hidden-4aoh7u hidden-nou40q",
                        children: [L() && e(k, {
                            href: "https://pump.fun/nNZWnzJQs9oMDAX2LXgFCmMoK8adZ5D1LbUQattpump",
                            openInNewTab: !0,
                            children: s(C.a, {
                                className: "framer-9mv6zo hidden-72rtr7 framer-lux5qc",
                                whileHover: $,
                                children: [e(ie, {
                                    className: "framer-1dkmsb0",
                                    "data-framer-name": "graphic",
                                    layout: "position",
                                    name: "graphic",
                                    opacity: 1,
                                    svg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 15 19"><path d="M 1.632 1.147 C 1.743 1.224 1.848 1.302 1.951 1.377 C 2.192 1.556 2.419 1.724 2.668 1.846 C 2.818 1.92 3.119 1.87 3.249 1.752 C 5.837 -0.581 9.171 -0.584 11.716 1.744 C 11.846 1.863 12.143 1.921 12.295 1.851 C 12.538 1.737 12.761 1.576 12.999 1.404 C 13.1 1.331 13.204 1.255 13.313 1.181 C 13.285 1.244 13.26 1.305 13.235 1.366 C 13.182 1.494 13.13 1.617 13.063 1.73 C 12.005 3.532 10.499 4.825 8.741 5.823 C 8.632 5.886 8.428 5.852 8.305 5.788 C 7.755 5.501 7.221 5.504 6.671 5.786 C 6.546 5.85 6.343 5.888 6.236 5.827 C 4.455 4.807 2.923 3.497 1.867 1.653 C 1.808 1.55 1.76 1.439 1.71 1.322 C 1.685 1.265 1.66 1.207 1.632 1.148 L 1.632 1.147 Z M 0.001 15.398 L 0.003 15.396 C 1.252 12.705 1.38 9.876 1.307 7.012 C 1.281 6.001 1.449 5.029 1.847 4.105 C 1.901 3.979 1.963 3.855 2.03 3.718 C 2.06 3.656 2.092 3.592 2.125 3.523 C 2.205 3.621 2.284 3.716 2.361 3.81 C 2.603 4.101 2.833 4.38 3.055 4.667 C 3.101 4.729 3.1 4.882 3.061 4.958 C 2.287 6.44 3.265 7.956 4.866 8.07 C 4.914 8.075 4.961 8.084 5.006 8.097 L 5.053 8.108 C 5.201 8.804 4.92 9.196 4.336 9.458 C 4.048 9.586 3.778 9.76 3.488 9.947 C 3.35 10.037 3.211 10.125 3.071 10.211 C 3.196 10.286 3.32 10.363 3.443 10.441 C 3.705 10.605 3.952 10.76 4.213 10.885 C 4.962 11.244 5.49 11.834 5.777 12.605 C 6.158 13.63 6.503 14.67 6.848 15.71 C 6.97 16.079 7.092 16.447 7.216 16.815 C 7.232 16.862 7.247 16.909 7.262 16.956 C 7.331 17.169 7.4 17.383 7.532 17.592 C 7.601 17.354 7.667 17.115 7.733 16.876 C 7.88 16.347 8.026 15.818 8.195 15.297 C 8.468 14.46 8.766 13.631 9.091 12.812 C 9.445 11.922 10.007 11.22 10.878 10.816 C 11.106 10.71 11.321 10.577 11.557 10.432 C 11.675 10.359 11.795 10.286 11.915 10.216 C 11.759 10.121 11.61 10.024 11.464 9.931 C 11.145 9.726 10.843 9.532 10.521 9.387 C 9.948 9.129 9.82 8.702 9.921 8.118 C 10.005 8.099 10.089 8.083 10.174 8.066 C 10.363 8.03 10.554 7.993 10.738 7.932 C 11.948 7.535 12.484 6.367 11.987 5.16 C 11.861 4.851 11.881 4.663 12.106 4.432 C 12.281 4.253 12.433 4.051 12.598 3.833 C 12.672 3.733 12.749 3.632 12.832 3.526 C 13.227 4.18 13.484 4.869 13.559 5.6 C 13.645 6.433 13.659 7.276 13.657 8.113 C 13.653 9.659 13.705 11.199 14.112 12.693 C 14.283 13.318 14.493 13.932 14.708 14.56 C 14.806 14.844 14.904 15.13 15 15.423 L 14.1 14.669 L 14.065 14.64 L 13.054 13.794 L 12.04 15.495 L 11.558 16.303 C 11.036 15.795 10.515 15.287 9.993 14.778 L 9.035 16.394 L 9.027 16.408 C 8.522 17.26 8.015 18.116 7.49 19 C 6.965 18.115 6.45 17.248 5.932 16.376 L 5.923 16.36 L 4.984 14.779 C 4.651 15.102 4.331 15.415 4.002 15.734 L 4 15.736 L 3.418 16.303 L 2.854 15.354 L 2.853 15.354 L 2.844 15.337 C 2.541 14.827 2.238 14.319 1.927 13.795 L 1.466 14.178 C 0.971 14.59 0.486 14.993 0.003 15.396 L 0 15.401 L 0.001 15.397 Z M 9.861 10.213 L 9.863 10.211 L 9.861 10.213 Z M 9.861 10.213 C 9.861 10.213 9.861 10.213 9.861 10.213 Z M 7.568 14.035 L 7.49 14.287 C 7.455 14.179 7.421 14.071 7.387 13.964 L 7.386 13.963 C 6.913 12.462 6.468 11.048 5.021 10.163 C 6.032 9.95 6.083 9.242 6.091 8.458 C 6.096 7.873 6.325 7.339 6.763 6.933 C 7.24 6.49 7.725 6.484 8.201 6.924 C 8.731 7.415 8.946 8.07 8.902 8.768 C 8.861 9.423 9.064 9.833 9.644 10.059 C 9.688 10.075 9.726 10.107 9.776 10.147 C 9.801 10.167 9.829 10.189 9.861 10.213 C 8.488 11.067 8.044 12.498 7.568 14.035 Z M 5.831 6.78 C 5.247 7.128 4.528 7.088 4.106 6.694 C 3.758 6.369 3.726 5.982 3.925 5.529 L 4.67 6.018 L 4.67 6.019 Z M 9.148 6.782 C 9.463 6.574 9.776 6.367 10.093 6.158 L 11.049 5.526 L 11.049 5.528 C 11.241 5.99 11.218 6.374 10.865 6.699 C 10.442 7.087 9.729 7.125 9.148 6.782 Z" fill="rgb(255, 255, 255)"></path></svg>',
                                    svgContentId: 3252224793,
                                    withExternalLayout: !0
                                }), e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                "--framer-font-size": "18px",
                                                "--framer-font-weight": "900",
                                                "--framer-line-height": "0.8em",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "PUMP.FUN"
                                        })
                                    }),
                                    className: "framer-oi02d5",
                                    fonts: ["FS;Satoshi-black"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })]
                            })
                        }), L() && e(k, {
                            href: "#",
                            openInNewTab: !0,
                            children: s(C.a, {
                                className: "framer-1h0qo9t hidden-72rtr7 framer-lux5qc",
                                whileHover: $,
                                children: []
                            })
                        })]
                    })]
                }), e("div", {
                    className: "framer-jt1xtm",
                    "data-border": !0,
                    children: e(H, {
                        children: e(Z, {
                            className: "framer-19mz5rk-container",
                            children: e(ue, {
                                alignment: "center",
                                direction: "left",
                                fadeOptions: {
                                    fadeAlpha: 0,
                                    fadeContent: !0,
                                    fadeInset: 0,
                                    fadeWidth: 25,
                                    overflow: !1
                                },
                                gap: 50,
                                height: "100%",
                                hoverFactor: 1,
                                id: "oPwZir7r2",
                                layoutId: "oPwZir7r2",
                                padding: 10,
                                paddingBottom: 10,
                                paddingLeft: 10,
                                paddingPerSide: !1,
                                paddingRight: 10,
                                paddingTop: 10,
                                sizingOptions: {
                                    heightType: !0,
                                    widthType: !0
                                },
                                slots: [e(C.div, {
                                    className: "framer-1mq4jzh",
                                    children: e(d, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "32px",
                                                    "--framer-line-height": "0.8em"
                                                },
                                                children: "$SOLMAN"
                                            })
                                        }),
                                        className: "framer-15mie4b",
                                        fonts: ["GF;Paytone One-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })],
                                speed: 100,
                                style: {
                                    height: "100%",
                                    width: "100%"
                                },
                                width: "100%"
                            })
                        })
                    })
                }), s("div", {
                    className: "framer-1h2um9p",
                    id: F,
                    ref: O,
                    children: [e(f, {
                        breakpoint: i,
                        overrides: {
                            AInDkfxQO: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 786.5,
                                    intrinsicWidth: 1010.5,
                                    loading: "lazy",
                                    pixelHeight: 1573,
                                    pixelWidth: 2021,
                                    sizes: "273px",
                                    src: "./framerusercontent.com/images/hero2.PNG?scale-down-to=1024",
                                    srcSet: "./framerusercontent.com/images/hero2.PNG?scale-down-to=512 512w,./framerusercontent.com/images/hero2.PNG?scale-down-to=1024 1024w,./framerusercontent.com/images/hero2.PNG 2021w"
                                }
                            },
                            eVc1_vAod: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 786.5,
                                    intrinsicWidth: 1010.5,
                                    loading: "lazy",
                                    pixelHeight: 1573,
                                    pixelWidth: 2021,
                                    sizes: "452px",
                                    src: "./framerusercontent.com/images/hero2.PNG?scale-down-to=1024",
                                    srcSet: "./framerusercontent.com/images/hero2.PNG?scale-down-to=512 512w,./framerusercontent.com/images/hero2.PNG?scale-down-to=1024 1024w,./framerusercontent.com/images/hero2.PNG 2021w"
                                }
                            },
                            wFNTSY3sV: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 786.5,
                                    intrinsicWidth: 1010.5,
                                    loading: "lazy",
                                    pixelHeight: 1573,
                                    pixelWidth: 2021,
                                    sizes: "603px",
                                    src: "./framerusercontent.com/images/hero2.PNG?scale-down-to=1024",
                                    srcSet: "./framerusercontent.com/images/hero2.PNG?scale-down-to=512 512w,./framerusercontent.com/images/hero2.PNG?scale-down-to=1024 1024w,./framerusercontent.com/images/hero2.PNG 2021w"
                                }
                            }
                        },
                        children: e(xe, {
                            __framer__animate: {
                                transition: K
                            },
                            __framer__animateOnce: !0,
                            __framer__enter: wr,
                            __framer__exit: br,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 786.5,
                                intrinsicWidth: 1010.5,
                                loading: "lazy",
                                pixelHeight: 1573,
                                pixelWidth: 2021,
                                sizes: "445px",
                                src: "./framerusercontent.com/images/hero2.PNG?scale-down-to=1024",
                                srcSet: "./framerusercontent.com/images/hero2.PNG?scale-down-to=512 512w,./framerusercontent.com/images/hero2.PNG?scale-down-to=1024 1024w,./framerusercontent.com/images/hero2.PNG 2021w"
                            },
                            className: "framer-1fddprw",
                            "data-framer-name": "Group_7",
                            name: "Group_7"
                        })
                    }), s("div", {
                        className: "framer-1kkhc4h",
                        children: [e(f, {
                            breakpoint: i,
                            overrides: {
                                AInDkfxQO: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "37px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Is it just a meme? Is it just a dog? No, it\u2019s revolution \u2013 it\u2019s SOLMAN!"
                                        })
                                    })
                                },
                                eVc1_vAod: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "37px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Is it just a meme? Is it just a dog? No, it\u2019s revolution \u2013 it\u2019s SOLMAN!"
                                        })
                                    })
                                },
                                wFNTSY3sV: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "53px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Is it just a meme? Is it just a dog? No, it\u2019s revolution \u2013 it\u2019s SOLMAN!"
                                        })
                                    })
                                }
                            },
                            children: e(d, {
                                __fromCanvasComponent: !0,
                                children: e(t, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                            "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                            "--framer-font-size": "37px",
                                            "--framer-line-height": "1em",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "Is it just a meme? Is it just a dog? No, it\u2019s revolution \u2013 it\u2019s SOLMAN!"
                                    })
                                }),
                                className: "framer-1v4xu87",
                                fonts: ["GF;Paytone One-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e(f, {
                            breakpoint: i,
                            overrides: {
                                AInDkfxQO: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                "--framer-font-size": "25px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Hold onto your wallets, because SOLMAN is taking off on Solana Chain! Remember the thrill of 2021? We're about to make that look like a warm-up lap. The SOLMAN community is gearing up to go BIGGER and crazier\u2014this isn't just a bull run, it's a stampede. Are you ready to run with the pack?"
                                        })
                                    })
                                },
                                eVc1_vAod: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                "--framer-font-size": "25px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Hold onto your wallets, because SOLMAN is taking off on Solana Chain! Remember the thrill of 2021? We're about to make that look like a warm-up lap. The SOLMAN community is gearing up to go BIGGER and crazier\u2014this isn't just a bull run, it's a stampede. Are you ready to run with the pack?"
                                        })
                                    })
                                },
                                wFNTSY3sV: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                "--framer-font-size": "35px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Hold onto your wallets, because SOLMAN is taking off on Solana Chain! Remember the thrill of 2021? We're about to make that look like a warm-up lap. The SOLMAN community is gearing up to go BIGGER and crazier\u2014this isn't just a bull run, it's a stampede. Are you ready to run with the pack?"
                                        })
                                    })
                                }
                            },
                            children: e(d, {
                                __fromCanvasComponent: !0,
                                children: e(t, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                            "--framer-font-size": "25px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1em",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "Hold onto your wallets, because SOLMAN is taking off on Solana Chain! Remember the thrill of 2021? We're about to make that look like a warm-up lap. The SOLMAN community is gearing up to go BIGGER and crazier\u2014this isn't just a bull run, it's a stampede. Are you ready to run with the pack?"
                                    })
                                }),
                                className: "framer-q46gsf",
                                fonts: ["FS;Satoshi-medium"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })]
                    })]
                }), s("div", {
                    className: "framer-10wcl9c",
                    id: B,
                    ref: M,
                    children: [s("div", {
                        className: "framer-82jw1a",
                        children: [e(f, {
                            breakpoint: i,
                            overrides: {
                                AInDkfxQO: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "54px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "How To Buy?"
                                        })
                                    })
                                },
                                eVc1_vAod: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "54px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "How To Buy?"
                                        })
                                    })
                                },
                                wFNTSY3sV: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "100px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "How To Buy?"
                                        })
                                    })
                                }
                            },
                            children: e(Fa, {
                                __framer__animate: {
                                    transition: K
                                },
                                __framer__animateOnce: !1,
                                __framer__enter: _a,
                                __framer__exit: Na,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __fromCanvasComponent: !0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                children: e(t, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                            "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                            "--framer-font-size": "65px",
                                            "--framer-line-height": "1em",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "How To Buy?"
                                    })
                                }),
                                className: "framer-tak5yt",
                                fonts: ["GF;Paytone One-regular"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        }), e(f, {
                            breakpoint: i,
                            overrides: {
                                eVc1_vAod: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                "--framer-font-size": "25px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Welcome to our quick guide on How to Buy SOLMAN on Solana Chain! Follow these straightforward steps to add SOLMAN to your crypto portfolio in just a few clicks."
                                        })
                                    })
                                },
                                wFNTSY3sV: {
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                "--framer-font-size": "35px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Welcome to our quick guide on How to Buy SOLMAN on Solana Chain! Follow these straightforward steps to add SOLMAN to your crypto portfolio in just a few clicks."
                                        })
                                    })
                                }
                            },
                            children: e(d, {
                                __fromCanvasComponent: !0,
                                children: e(t, {
                                    children: e("p", {
                                        style: {
                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                            "--framer-font-size": "20px",
                                            "--framer-font-weight": "500",
                                            "--framer-line-height": "1em",
                                            "--framer-text-alignment": "center",
                                            "--framer-text-color": "rgb(255, 255, 255)"
                                        },
                                        children: "Welcome to our quick guide on How to Buy SOLMAN on Solana Chain! Follow these straightforward steps to add SOLMAN to your crypto portfolio in just a few clicks."
                                    })
                                }),
                                className: "framer-o137gh",
                                fonts: ["FS;Satoshi-medium"],
                                verticalAlignment: "top",
                                withExternalLayout: !0
                            })
                        })]
                    }), s("div", {
                        className: "framer-19w3ta1",
                        children: [s(Pa, {
                            __framer__animate: {
                                transition: K
                            },
                            __framer__animateOnce: !0,
                            __framer__enter: Ba,
                            __framer__exit: Ma,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: .5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: "framer-1gml4mc",
                            children: [s("div", {
                                className: "framer-1ntfirx",
                                children: [e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "79px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: e("sSUIg", {
                                                children: "1"
                                            })
                                        })
                                    }),
                                    className: "framer-ztisvj",
                                    fonts: ["GF;Paytone One-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), s("div", {
                                    className: "framer-17w5add",
                                    children: [e(f, {
                                        breakpoint: i,
                                        overrides: {
                                            AInDkfxQO: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)",
                                                            "--framer-text-transform": "uppercase"
                                                        },
                                                        children: e("sSUIg", {
                                                            children: "Set Up a Wallet"
                                                        })
                                                    })
                                                })
                                            },
                                            eVc1_vAod: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)",
                                                            "--framer-text-transform": "uppercase"
                                                        },
                                                        children: e("sSUIg", {
                                                            children: "Set Up a Wallet"
                                                        })
                                                    })
                                                })
                                            }
                                        },
                                        children: e(d, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                        "--framer-font-family": '"Satoshi", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "900",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "rgb(255, 255, 255)",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: e("sSUIg", {
                                                        children: "Set Up a Wallet"
                                                    })
                                                })
                                            }),
                                            className: "framer-g5ccxy",
                                            fonts: ["FS;Satoshi-black"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e(f, {
                                        breakpoint: i,
                                        overrides: {
                                            AInDkfxQO: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                            "--framer-font-size": "15px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "You can download PHANTOM extension or use the mobile app, and add SOL to it."
                                                    })
                                                })
                                            },
                                            eVc1_vAod: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                            "--framer-font-size": "15px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "You can download PHANTOM extension or use the mobile app, and add SOL to it."
                                                    })
                                                })
                                            },
                                            wFNTSY3sV: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                            "--framer-font-size": "23px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "You can download PHANTOM extension or use the mobile app, and add SOL to it."
                                                    })
                                                })
                                            }
                                        },
                                        children: e(d, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                        "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "You can download PHANTOM extension or use the mobile app, and add SOL to it."
                                                })
                                            }),
                                            className: "framer-jpcaic",
                                            fonts: ["FS;Satoshi-medium"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            }), s("div", {
                                className: "framer-1ezsmbk",
                                children: [e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "79px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: e("sSUIg", {
                                                children: "2"
                                            })
                                        })
                                    }),
                                    className: "framer-1fci6em",
                                    fonts: ["GF;Paytone One-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), s("div", {
                                    className: "framer-1oerm5a",
                                    children: [e(f, {
                                        breakpoint: i,
                                        overrides: {
                                            AInDkfxQO: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)",
                                                            "--framer-text-transform": "uppercase"
                                                        },
                                                        children: e("sSUIg", {
                                                            children: "Enter Contract Address"
                                                        })
                                                    })
                                                })
                                            },
                                            eVc1_vAod: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)",
                                                            "--framer-text-transform": "uppercase"
                                                        },
                                                        children: e("sSUIg", {
                                                            children: "Enter Contract Address"
                                                        })
                                                    })
                                                })
                                            }
                                        },
                                        children: e(d, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                        "--framer-font-family": '"Satoshi", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "900",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "rgb(255, 255, 255)",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: e("sSUIg", {
                                                        children: "Enter Contract Address"
                                                    })
                                                })
                                            }),
                                            className: "framer-egt4hj",
                                            fonts: ["FS;Satoshi-black"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e(f, {
                                        breakpoint: i,
                                        overrides: {
                                            AInDkfxQO: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                            "--framer-font-size": "15px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "Go to pump.fun, connect your wallet and paste the SOLMAN contract address."
                                                    })
                                                })
                                            },
                                            eVc1_vAod: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                            "--framer-font-size": "15px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "Go to pump.fun, connect your wallet and paste the SOLMAN contract address."
                                                    })
                                                })
                                            },
                                            wFNTSY3sV: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                            "--framer-font-size": "23px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "Go to pump.fun, connect your wallet and paste the SOLMAN contract address."
                                                    })
                                                })
                                            }
                                        },
                                        children: e(d, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                        "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Go to pump.fun, connect your wallet and paste the SOLMAN contract address."
                                                })
                                            }),
                                            className: "framer-os3i0r",
                                            fonts: ["FS;Satoshi-medium"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            }), s("div", {
                                className: "framer-1ko9jab",
                                children: [e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "79px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: e("sSUIg", {
                                                children: "3"
                                            })
                                        })
                                    }),
                                    className: "framer-1enhmd6",
                                    fonts: ["GF;Paytone One-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                }), s("div", {
                                    className: "framer-1cac0h8",
                                    children: [e(f, {
                                        breakpoint: i,
                                        overrides: {
                                            AInDkfxQO: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)",
                                                            "--framer-text-transform": "uppercase"
                                                        },
                                                        children: e("sSUIg", {
                                                            children: "SWAP SOL for SOLMAN"
                                                        })
                                                    })
                                                })
                                            },
                                            eVc1_vAod: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                            "--framer-font-family": '"Satoshi", sans-serif',
                                                            "--framer-font-size": "18px",
                                                            "--framer-font-weight": "900",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)",
                                                            "--framer-text-transform": "uppercase"
                                                        },
                                                        children: e("sSUIg", {
                                                            children: "SWAP SOL for SOLMAN"
                                                        })
                                                    })
                                                })
                                            }
                                        },
                                        children: e(d, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                        "--framer-font-family": '"Satoshi", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "900",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "rgb(255, 255, 255)",
                                                        "--framer-text-transform": "uppercase"
                                                    },
                                                    children: e("sSUIg", {
                                                        children: "SWAP SOL for SOLMAN"
                                                    })
                                                })
                                            }),
                                            className: "framer-1okfqt3",
                                            fonts: ["FS;Satoshi-black"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    }), e(f, {
                                        breakpoint: i,
                                        overrides: {
                                            AInDkfxQO: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                            "--framer-font-size": "15px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "Specify the amount of SOL to exchange, review the transaction details, and execute the swap."
                                                    })
                                                })
                                            },
                                            eVc1_vAod: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                            "--framer-font-size": "15px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "Specify the amount of SOL to exchange, review the transaction details, and execute the swap."
                                                    })
                                                })
                                            },
                                            wFNTSY3sV: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                            "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                            "--framer-font-size": "23px",
                                                            "--framer-font-weight": "500",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "rgb(255, 255, 255)"
                                                        },
                                                        children: "Specify the amount of SOL to exchange, review the transaction details, and execute the swap."
                                                    })
                                                })
                                            }
                                        },
                                        children: e(d, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                        "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-font-weight": "500",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "rgb(255, 255, 255)"
                                                    },
                                                    children: "Specify the amount of SOL to exchange, review the transaction details, and execute the swap."
                                                })
                                            }),
                                            className: "framer-1h2axyk",
                                            fonts: ["FS;Satoshi-medium"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })]
                                })]
                            })]
                        }), e(f, {
                            breakpoint: i,
                            overrides: {
                                AInDkfxQO: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 773.5,
                                        intrinsicWidth: 608.5,
                                        loading: "lazy",
                                        pixelHeight: 1547,
                                        pixelWidth: 1217,
                                        sizes: "280px",
                                        src: "./framerusercontent.com/images/hero3.PNG?scale-down-to=1024",
                                        srcSet: "./framerusercontent.com/images/hero3.PNG?scale-down-to=1024 805w,./framerusercontent.com/images/hero3.PNG 1217w"
                                    }
                                },
                                eVc1_vAod: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 773.5,
                                        intrinsicWidth: 608.5,
                                        loading: "lazy",
                                        pixelHeight: 1547,
                                        pixelWidth: 1217,
                                        sizes: "288px",
                                        src: "./framerusercontent.com/images/hero3.PNG?scale-down-to=1024",
                                        srcSet: "./framerusercontent.com/images/hero3.PNG?scale-down-to=1024 805w,./framerusercontent.com/images/hero3.PNG 1217w"
                                    }
                                },
                                wFNTSY3sV: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 773.5,
                                        intrinsicWidth: 608.5,
                                        loading: "lazy",
                                        pixelHeight: 1547,
                                        pixelWidth: 1217,
                                        sizes: "472px",
                                        src: "./framerusercontent.com/images/hero3.PNG?scale-down-to=1024",
                                        srcSet: "./framerusercontent.com/images/hero3.PNG?scale-down-to=1024 805w,./framerusercontent.com/images/hero3.PNG 1217w"
                                    }
                                }
                            },
                            children: e(xe, {
                                __framer__animate: {
                                    transition: K
                                },
                                __framer__animateOnce: !0,
                                __framer__enter: wr,
                                __framer__exit: br,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: .5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 773.5,
                                    intrinsicWidth: 608.5,
                                    loading: "lazy",
                                    pixelHeight: 1547,
                                    pixelWidth: 1217,
                                    sizes: "344px",
                                    src: "./framerusercontent.com/images/hero3.PNG?scale-down-to=1024",
                                    srcSet: "./framerusercontent.com/images/hero3.PNG?scale-down-to=1024 805w,./framerusercontent.com/images/hero3.PNG 1217w"
                                },
                                className: "framer-17c8bmx",
                                "data-framer-name": "Group_11",
                                name: "Group_11"
                            })
                        })]
                    })]
                }), s("div", {
                    className: "framer-1bm20k9",
                    id: R,
                    ref: A,
                    children: [w() && e(f, {
                        breakpoint: i,
                        overrides: {
                            wFNTSY3sV: {
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 852,
                                    intrinsicWidth: 852,
                                    loading: "lazy",
                                    pixelHeight: 1704,
                                    pixelWidth: 1704,
                                    sizes: "741px",
                                    src: "./framerusercontent.com/images/logo.PNG?scale-down-to=1024",
                                    srcSet: "./framerusercontent.com/images/logo.PNG?scale-down-to=512 512w,./framerusercontent.com/images/logo.PNG?scale-down-to=1024 1024w,./framerusercontent.com/images/logo.PNG 1704w"
                                }
                            }
                        },
                        children: e(xe, {
                            __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: .3,
                                ease: [.44, 0, .56, 1],
                                mass: 1,
                                stiffness: 72,
                                type: "spring"
                            },
                            __framer__styleTransformEffectEnabled: !0,
                            __framer__transformTargets: [{
                                target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }, {
                                target: {
                                    opacity: 1,
                                    rotate: 360,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0
                                }
                            }],
                            __framer__transformTrigger: "onInView",
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                                alt: "",
                                fit: "fill",
                                intrinsicHeight: 852,
                                intrinsicWidth: 852,
                                loading: "lazy",
                                pixelHeight: 1704,
                                pixelWidth: 1704,
                                sizes: "478px",
                                src: "./framerusercontent.com/images/logo.PNG?scale-down-to=1024",
                                srcSet: "./framerusercontent.com/images/logo.PNG?scale-down-to=512 512w,./framerusercontent.com/images/logo.PNG?scale-down-to=1024 1024w,./framerusercontent.com/images/logo.PNG 1704w"
                            },
                            className: "framer-1ug3nha hidden-obpi3w hidden-nou40q",
                            "data-framer-name": "Group_12",
                            name: "Group_12"
                        })
                    }), s("div", {
                        className: "framer-11w5goj",
                        children: [s("div", {
                            className: "framer-1htmq1o",
                            children: [e(f, {
                                breakpoint: i,
                                overrides: {
                                    AInDkfxQO: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "57px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Tokenomics"
                                            })
                                        })
                                    },
                                    eVc1_vAod: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "57px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Tokenomics"
                                            })
                                        })
                                    },
                                    wFNTSY3sV: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "100px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Tokenomics"
                                            })
                                        })
                                    }
                                },
                                children: e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                "--framer-font-size": "65px",
                                                "--framer-line-height": "1em",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Tokenomics"
                                        })
                                    }),
                                    className: "framer-1gbxg0n",
                                    fonts: ["GF;Paytone One-regular"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(f, {
                                breakpoint: i,
                                overrides: {
                                    eVc1_vAod: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                    "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                    "--framer-font-size": "25px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Explore the tokenomics of SOLMAN to understand how it\u2019s structured for value growth and stability. Our model includes details on supply distribution and taking advantage of Solana Chain transaction fees."
                                            })
                                        })
                                    },
                                    wFNTSY3sV: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                    "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                    "--framer-font-size": "35px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "rgb(255, 255, 255)"
                                                },
                                                children: "Explore the tokenomics of SOLMAN to understand how it\u2019s structured for value growth and stability. Our model includes details on supply distribution and taking advantage of Solana Chain transaction fees."
                                            })
                                        })
                                    }
                                },
                                children: e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                "--framer-font-size": "20px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "rgb(255, 255, 255)"
                                            },
                                            children: "Explore the tokenomics of SOLMAN to understand how it\u2019s structured for value growth and stability. Our model includes details on supply distribution and taking advantage of Solana Chain transaction fees."
                                        })
                                    }),
                                    className: "framer-w0eid7",
                                    fonts: ["FS;Satoshi-medium"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        }), s("div", {
                            className: "framer-1mydc3e",
                            children: [s("div", {
                                className: "framer-1r5upf8",
                                children: [e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        AInDkfxQO: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "TICKER"
                                                })
                                            })
                                        },
                                        wFNTSY3sV: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "45px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "TICKER"
                                                })
                                            })
                                        }
                                    },
                                    children: e(d, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "30px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: "TICKER"
                                            })
                                        }),
                                        className: "framer-6yr3eb",
                                        fonts: ["GF;Paytone One-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        AInDkfxQO: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "$SOLMAN"
                                                })
                                            })
                                        },
                                        wFNTSY3sV: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "45px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "$SOLMAN"
                                                })
                                            })
                                        }
                                    },
                                    children: e(d, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "30px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: "$SOLMAN"
                                            })
                                        }),
                                        className: "framer-1wblll4",
                                        fonts: ["GF;Paytone One-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            }), s("div", {
                                className: "framer-q5pha3",
                                children: [e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        AInDkfxQO: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "TAXES"
                                                })
                                            })
                                        },
                                        wFNTSY3sV: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "45px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "TAXES"
                                                })
                                            })
                                        }
                                    },
                                    children: e(d, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "30px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: "TAXES"
                                            })
                                        }),
                                        className: "framer-18dq4fv",
                                        fonts: ["GF;Paytone One-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        AInDkfxQO: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "0% BUY / 0% SELL"
                                                })
                                            })
                                        },
                                        wFNTSY3sV: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "45px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "0% BUY / 0% SELL"
                                                })
                                            })
                                        }
                                    },
                                    children: e(d, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "30px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: "0% BUY / 0% SELL"
                                            })
                                        }),
                                        className: "framer-d8cv38",
                                        fonts: ["GF;Paytone One-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            }), s("div", {
                                className: "framer-1xvwv7o",
                                children: [e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        AInDkfxQO: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "SUPPLY"
                                                })
                                            })
                                        },
                                        wFNTSY3sV: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "45px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "SUPPLY"
                                                })
                                            })
                                        }
                                    },
                                    children: e(d, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "30px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: "SUPPLY"
                                            })
                                        }),
                                        className: "framer-io49fl",
                                        fonts: ["GF;Paytone One-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                }), e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        AInDkfxQO: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "20px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "1 BILLION"
                                                })
                                            })
                                        },
                                        wFNTSY3sV: {
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "45px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "1 BILLION"
                                                })
                                            })
                                        }
                                    },
                                    children: e(d, {
                                        __fromCanvasComponent: !0,
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "30px",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: "1 BILLION"
                                            })
                                        }),
                                        className: "framer-1xne3ie",
                                        fonts: ["GF;Paytone One-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            }), s("div", {
                                className: "framer-qdz15u",
                                children: [e("div", {
                                    className: "framer-1q5zez2",
                                    children: e(f, {
                                        breakpoint: i,
                                        overrides: {
                                            AInDkfxQO: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                            "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                            "--framer-font-size": "20px",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "#73c9ff"
                                                        },
                                                        children: "LP BURNT"
                                                    })
                                                })
                                            },
                                            wFNTSY3sV: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                            "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                            "--framer-font-size": "45px",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "#73c9ff"
                                                        },
                                                        children: "LP BURNT"
                                                    })
                                                })
                                            }
                                        },
                                        children: e(d, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "30px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "LP BURNT"
                                                })
                                            }),
                                            className: "framer-1yfoeun",
                                            fonts: ["GF;Paytone One-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                }), e("div", {
                                    className: "framer-k1locj",
                                    children: e(f, {
                                        breakpoint: i,
                                        overrides: {
                                            AInDkfxQO: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                            "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                            "--framer-font-size": "20px",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "#73c9ff"
                                                        },
                                                        children: "RENOUNCED"
                                                    })
                                                })
                                            },
                                            wFNTSY3sV: {
                                                children: e(t, {
                                                    children: e("p", {
                                                        style: {
                                                            "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                            "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                            "--framer-font-size": "45px",
                                                            "--framer-line-height": "1em",
                                                            "--framer-text-color": "#73c9ff"
                                                        },
                                                        children: "RENOUNCED"
                                                    })
                                                })
                                            }
                                        },
                                        children: e(d, {
                                            __fromCanvasComponent: !0,
                                            children: e(t, {
                                                children: e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "30px",
                                                        "--framer-line-height": "1em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "RENOUNCED"
                                                })
                                            }),
                                            className: "framer-24z20c",
                                            fonts: ["GF;Paytone One-regular"],
                                            verticalAlignment: "top",
                                            withExternalLayout: !0
                                        })
                                    })
                                })]
                            }), ]
                        }), b() && e(f, {
                            breakpoint: i,
                            overrides: {
                                AInDkfxQO: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 852,
                                        intrinsicWidth: 852,
                                        loading: "lazy",
                                        pixelHeight: 1704,
                                        pixelWidth: 1704,
                                        sizes: "300px",
                                        src: "./framerusercontent.com/images/logo.PNG?scale-down-to=1024",
                                        srcSet: "./framerusercontent.com/images/logo.PNG?scale-down-to=512 512w,./framerusercontent.com/images/logo.PNG?scale-down-to=1024 1024w,./framerusercontent.com/images/logo.PNG 1704w"
                                    }
                                },
                                eVc1_vAod: {
                                    background: {
                                        alt: "",
                                        fit: "fill",
                                        intrinsicHeight: 852,
                                        intrinsicWidth: 852,
                                        loading: "lazy",
                                        pixelHeight: 1704,
                                        pixelWidth: 1704,
                                        sizes: "300px",
                                        src: "./framerusercontent.com/images/logo.PNG?scale-down-to=1024",
                                        srcSet: "./framerusercontent.com/images/logo.PNG?scale-down-to=512 512w,./framerusercontent.com/images/logo.PNG?scale-down-to=1024 1024w,./framerusercontent.com/images/logo.PNG 1704w"
                                    }
                                }
                            },
                            children: e(xe, {
                                __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: .3,
                                    ease: [.44, 0, .56, 1],
                                    mass: 1,
                                    stiffness: 72,
                                    type: "spring"
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [{
                                    target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }, {
                                    target: {
                                        opacity: 1,
                                        rotate: 360,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                }],
                                __framer__transformTrigger: "onInView",
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                    alt: "",
                                    fit: "fill",
                                    intrinsicHeight: 852,
                                    intrinsicWidth: 852,
                                    loading: "lazy",
                                    pixelHeight: 1704,
                                    pixelWidth: 1704,
                                    src: "./framerusercontent.com/images/logo.PNG?scale-down-to=1024",
                                    srcSet: "./framerusercontent.com/images/logo.PNG?scale-down-to=512 512w,./framerusercontent.com/images/logo.PNG?scale-down-to=1024 1024w,./framerusercontent.com/images/logo.PNG 1704w"
                                },
                                className: "framer-1advuqa hidden-72rtr7 hidden-19zrzkq hidden-4aoh7u",
                                "data-framer-name": "Group_12",
                                name: "Group_12"
                            })
                        })]
                    })]
                }), e("div", {
                    className: "framer-127hbt4",
                    children: s("div", {
                        className: "framer-g3yozp",
                        "data-border": !0,
                        children: [s("div", {
                            className: "framer-vpvn08",
                            children: [e(f, {
                                breakpoint: i,
                                overrides: {
                                    AInDkfxQO: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                    "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: "All Barks Reserved, 2024"
                                            })
                                        })
                                    },
                                    eVc1_vAod: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                    "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                    "--framer-font-size": "13px",
                                                    "--framer-font-weight": "500",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: "All Barks Reserved, 2024"
                                            })
                                        })
                                    }
                                },
                                children: e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1tZWRpdW0=",
                                                "--framer-font-family": '"Satoshi", "Satoshi Placeholder", sans-serif',
                                                "--framer-font-size": "19px",
                                                "--framer-font-weight": "500",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "#73c9ff"
                                            },
                                            children: "All Barks Reserved, 2024"
                                        })
                                    }),
                                    className: "framer-1sfwvm5",
                                    fonts: ["FS;Satoshi-medium"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), s("div", {
                                className: "framer-mfowa4",
                                children: [e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        AInDkfxQO: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 729,
                                                intrinsicWidth: 537.5,
                                                loading: "lazy",
                                                pixelHeight: 1458,
                                                pixelWidth: 1075,
                                                sizes: "40px",
                                                src: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024",
                                                srcSet: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024 755w,./framerusercontent.com/images/hero.PNG 1075w"
                                            }
                                        },
                                        eVc1_vAod: {
                                            background: {
                                                alt: "",
                                                fit: "fill",
                                                intrinsicHeight: 729,
                                                intrinsicWidth: 537.5,
                                                loading: "lazy",
                                                pixelHeight: 1458,
                                                pixelWidth: 1075,
                                                sizes: "40px",
                                                src: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024",
                                                srcSet: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024 755w,./framerusercontent.com/images/hero.PNG 1075w"
                                            }
                                        }
                                    },
                                    children: e(ir, {
                                        background: {
                                            alt: "",
                                            fit: "fill",
                                            intrinsicHeight: 729,
                                            intrinsicWidth: 537.5,
                                            loading: "lazy",
                                            pixelHeight: 1458,
                                            pixelWidth: 1075,
                                            sizes: "60px",
                                            src: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024",
                                            srcSet: "./framerusercontent.com/images/hero.PNG?scale-down-to=1024 755w,./framerusercontent.com/images/hero.PNG 1075w"
                                        },
                                        className: "framer-1hlmgd1",
                                        "data-framer-name": "Group_5",
                                        name: "Group_5"
                                    })
                                }), e(f, {
                                    breakpoint: i,
                                    overrides: {
                                        AInDkfxQO: {
                                            children: s(t, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "30px",
                                                        "--framer-line-height": "0.8em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "SOLMAN "
                                                }), ]
                                            })
                                        },
                                        eVc1_vAod: {
                                            children: s(t, {
                                                children: [e("p", {
                                                    style: {
                                                        "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                        "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                        "--framer-font-size": "30px",
                                                        "--framer-line-height": "0.8em",
                                                        "--framer-text-color": "#73c9ff"
                                                    },
                                                    children: "SOLMAN "
                                                }), ]
                                            })
                                        }
                                    },
                                    children: e(d, {
                                        __fromCanvasComponent: !0,
                                        children: s(t, {
                                            children: [e("p", {
                                                style: {
                                                    "--font-selector": "R0Y7UGF5dG9uZSBPbmUtcmVndWxhcg==",
                                                    "--framer-font-family": '"Paytone One", "Paytone One Placeholder", sans-serif',
                                                    "--framer-font-size": "42px",
                                                    "--framer-line-height": "0.8em",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: "SOLMAN "
                                            }), ]
                                        }),
                                        className: "framer-1nfzru4",
                                        fonts: ["GF;Paytone One-regular"],
                                        verticalAlignment: "top",
                                        withExternalLayout: !0
                                    })
                                })]
                            })]
                        }), s("div", {
                            className: "framer-18ypcjk",
                            children: [e(f, {
                                breakpoint: i,
                                overrides: {
                                    AInDkfxQO: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "900",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: e(k, {
                                                    href: {
                                                        hash: ":mlakVCiPs",
                                                        webPageId: "augiA20Il"
                                                    },
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-72a2un",
                                                        "data-styles-preset": "kyo9KHVc6",
                                                        children: "About"
                                                    })
                                                })
                                            })
                                        })
                                    },
                                    eVc1_vAod: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "900",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: e(k, {
                                                    href: {
                                                        hash: ":mlakVCiPs",
                                                        webPageId: "augiA20Il"
                                                    },
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-72a2un",
                                                        "data-styles-preset": "kyo9KHVc6",
                                                        children: "About"
                                                    })
                                                })
                                            })
                                        })
                                    }
                                },
                                children: e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                "--framer-font-weight": "900",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "#73c9ff"
                                            },
                                            children: e(k, {
                                                href: {
                                                    hash: ":mlakVCiPs",
                                                    webPageId: "augiA20Il"
                                                },
                                                openInNewTab: !1,
                                                smoothScroll: !1,
                                                children: e("a", {
                                                    className: "framer-styles-preset-72a2un",
                                                    "data-styles-preset": "kyo9KHVc6",
                                                    children: "About"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-k3m7z6",
                                    fonts: ["FS;Satoshi-black"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(f, {
                                breakpoint: i,
                                overrides: {
                                    AInDkfxQO: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "900",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: e(k, {
                                                    href: {
                                                        hash: ":cy0wHCQcG",
                                                        webPageId: "augiA20Il"
                                                    },
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-72a2un",
                                                        "data-styles-preset": "kyo9KHVc6",
                                                        children: "How To Buy"
                                                    })
                                                })
                                            })
                                        })
                                    },
                                    eVc1_vAod: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "900",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: e(k, {
                                                    href: {
                                                        hash: ":cy0wHCQcG",
                                                        webPageId: "augiA20Il"
                                                    },
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-72a2un",
                                                        "data-styles-preset": "kyo9KHVc6",
                                                        children: "How To Buy"
                                                    })
                                                })
                                            })
                                        })
                                    }
                                },
                                children: e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                "--framer-font-weight": "900",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "#73c9ff"
                                            },
                                            children: e(k, {
                                                href: {
                                                    hash: ":cy0wHCQcG",
                                                    webPageId: "augiA20Il"
                                                },
                                                openInNewTab: !1,
                                                smoothScroll: !1,
                                                children: e("a", {
                                                    className: "framer-styles-preset-72a2un",
                                                    "data-styles-preset": "kyo9KHVc6",
                                                    children: "How To Buy"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-1rodr4e",
                                    fonts: ["FS;Satoshi-black"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(f, {
                                breakpoint: i,
                                overrides: {
                                    AInDkfxQO: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "900",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: e(k, {
                                                    href: {
                                                        hash: ":jUFl27kr9",
                                                        webPageId: "augiA20Il"
                                                    },
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-72a2un",
                                                        "data-styles-preset": "kyo9KHVc6",
                                                        children: "Tokenomics"
                                                    })
                                                })
                                            })
                                        })
                                    },
                                    eVc1_vAod: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "900",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: e(k, {
                                                    href: {
                                                        hash: ":jUFl27kr9",
                                                        webPageId: "augiA20Il"
                                                    },
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-72a2un",
                                                        "data-styles-preset": "kyo9KHVc6",
                                                        children: "Tokenomics"
                                                    })
                                                })
                                            })
                                        })
                                    }
                                },
                                children: e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                "--framer-font-weight": "900",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "#73c9ff"
                                            },
                                            children: e(k, {
                                                href: {
                                                    hash: ":jUFl27kr9",
                                                    webPageId: "augiA20Il"
                                                },
                                                openInNewTab: !1,
                                                smoothScroll: !1,
                                                children: e("a", {
                                                    className: "framer-styles-preset-72a2un",
                                                    "data-styles-preset": "kyo9KHVc6",
                                                    children: "Tokenomics"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-1otllnz",
                                    fonts: ["FS;Satoshi-black"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            }), e(f, {
                                breakpoint: i,
                                overrides: {
                                    AInDkfxQO: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "900",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: e(k, {
                                                    href: {
                                                        hash: ":ce_tysghM",
                                                        webPageId: "augiA20Il"
                                                    },
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-72a2un",
                                                        "data-styles-preset": "kyo9KHVc6",
                                                        children: "Official Links"
                                                    })
                                                })
                                            })
                                        })
                                    },
                                    eVc1_vAod: {
                                        children: e(t, {
                                            children: e("p", {
                                                style: {
                                                    "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                    "--framer-font-family": '"Satoshi", sans-serif',
                                                    "--framer-font-size": "12px",
                                                    "--framer-font-weight": "900",
                                                    "--framer-line-height": "1em",
                                                    "--framer-text-alignment": "center",
                                                    "--framer-text-color": "#73c9ff"
                                                },
                                                children: e(k, {
                                                    href: {
                                                        hash: ":ce_tysghM",
                                                        webPageId: "augiA20Il"
                                                    },
                                                    openInNewTab: !1,
                                                    smoothScroll: !1,
                                                    children: e("a", {
                                                        className: "framer-styles-preset-72a2un",
                                                        "data-styles-preset": "kyo9KHVc6",
                                                        children: "Official Links"
                                                    })
                                                })
                                            })
                                        })
                                    }
                                },
                                children: e(d, {
                                    __fromCanvasComponent: !0,
                                    children: e(t, {
                                        children: e("p", {
                                            style: {
                                                "--font-selector": "RlM7U2F0b3NoaS1ibGFjaw==",
                                                "--framer-font-family": '"Satoshi", sans-serif',
                                                "--framer-font-weight": "900",
                                                "--framer-line-height": "1em",
                                                "--framer-text-alignment": "center",
                                                "--framer-text-color": "#73c9ff"
                                            },
                                            children: e(k, {
                                                href: {
                                                    hash: ":ce_tysghM",
                                                    webPageId: "augiA20Il"
                                                },
                                                openInNewTab: !1,
                                                smoothScroll: !1,
                                                children: e("a", {
                                                    className: "framer-styles-preset-72a2un",
                                                    "data-styles-preset": "kyo9KHVc6",
                                                    children: "Official Links"
                                                })
                                            })
                                        })
                                    }),
                                    className: "framer-xllpn9",
                                    fonts: ["FS;Satoshi-black"],
                                    verticalAlignment: "top",
                                    withExternalLayout: !0
                                })
                            })]
                        })]
                    })
                })]
            }), e("div", {
                className: Se(dt, ...V),
                id: "overlay"
            })]
        })
    })
})
  , Ga = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", `.${Pe.bodyClassName}-framer-Xo6nI { background: rgb(0, 82, 255); }`, ".framer-Xo6nI.framer-lux5qc, .framer-Xo6nI .framer-lux5qc { display: block; }", ".framer-Xo6nI.framer-72rtr7 { align-content: center; align-items: center; background-color: #73c9ff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }", ".framer-Xo6nI .framer-15dvlek { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 121px; position: relative; width: auto; }", ".framer-Xo6nI .framer-i6750o { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 200px 0px 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-1u87dxm, .framer-Xo6nI .framer-zz83up, .framer-Xo6nI .framer-x61dk9, .framer-Xo6nI .framer-vw62qj, .framer-Xo6nI .framer-fgm2nm, .framer-Xo6nI .framer-vkuqrn, .framer-Xo6nI .framer-z0nllr, .framer-Xo6nI .framer-1ouri5e, .framer-Xo6nI .framer-1149p1t, .framer-Xo6nI .framer-oi02d5, .framer-Xo6nI .framer-1b1roxy, .framer-Xo6nI .framer-15mie4b, .framer-Xo6nI .framer-tak5yt, .framer-Xo6nI .framer-ztisvj, .framer-Xo6nI .framer-1fci6em, .framer-Xo6nI .framer-1enhmd6, .framer-Xo6nI .framer-1gbxg0n, .framer-Xo6nI .framer-6yr3eb, .framer-Xo6nI .framer-1wblll4, .framer-Xo6nI .framer-18dq4fv, .framer-Xo6nI .framer-d8cv38, .framer-Xo6nI .framer-io49fl, .framer-Xo6nI .framer-1xne3ie, .framer-Xo6nI .framer-1yfoeun, .framer-Xo6nI .framer-24z20c, .framer-Xo6nI .framer-1xq8k67, .framer-Xo6nI .framer-wef9sr, .framer-Xo6nI .framer-1sfwvm5, .framer-Xo6nI .framer-1nfzru4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-Xo6nI .framer-7mtqmk { aspect-ratio: 0.7373113854595336 / 1; bottom: 0px; flex: none; overflow: visible; position: absolute; right: 0px; top: 0px; width: var(--framer-aspect-ratio-supported, 367px); z-index: 1; }", ".framer-Xo6nI .framer-10p2vyu { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: 131px; position: relative; white-space: pre; width: auto; }", ".framer-Xo6nI .framer-dmrin1 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 5px; position: relative; width: auto; }", ".framer-Xo6nI .framer-1mcnaw7, .framer-Xo6nI .framer-8djxin, .framer-Xo6nI .framer-15pk6g, .framer-Xo6nI .framer-fxx7z3, .framer-Xo6nI .framer-mfowa4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-11fs353-container, .framer-Xo6nI .framer-d6rxpy-container, .framer-Xo6nI .framer-h5v0mc-container, .framer-Xo6nI .framer-iss8an-container { flex: none; height: 20px; position: relative; width: 20px; }", ".framer-Xo6nI .framer-qjykua { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 1000px; }", ".framer-Xo6nI .framer-llcgay { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 33px; height: min-content; justify-content: center; overflow: hidden; padding: 5px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-mppc7z, .framer-Xo6nI .framer-1cpqo0y, .framer-Xo6nI .framer-hhy3o0, .framer-Xo6nI .framer-1xwjx91, .framer-Xo6nI .framer-9mv6zo, .framer-Xo6nI .framer-1h0qo9t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: min-content; }", ".framer-Xo6nI .framer-qzw5pa, .framer-Xo6nI .framer-1dkmsb0 { flex: none; height: 19px; position: relative; width: 15px; }", ".framer-Xo6nI .framer-ep6lz6, .framer-Xo6nI .framer-1pvfh0i { flex: none; height: 17px; position: relative; width: 14px; }", ".framer-Xo6nI .framer-k9ch8q { flex: none; height: 18px; position: relative; width: 67px; }", ".framer-Xo6nI .framer-vgmcpj { flex: none; height: 14px; position: relative; width: 52px; }", ".framer-Xo6nI .framer-hz7jyh { aspect-ratio: 0.7373113854595336 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 242px); overflow: visible; position: relative; width: 179px; z-index: 1; }", ".framer-Xo6nI .framer-1bmeaj5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 19px; height: min-content; justify-content: center; min-height: 57px; min-width: 174px; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-jt1xtm { --border-bottom-width: 5px; --border-color: #000000; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 50px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: auto; }", ".framer-Xo6nI .framer-19mz5rk-container { flex: 1 0 0px; height: 50px; position: relative; width: 1px; }", ".framer-Xo6nI .framer-1mq4jzh { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-1h2um9p { align-content: center; align-items: center; background: linear-gradient(180deg, #000000 0%, purple 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 65px; height: min-content; justify-content: center; overflow: hidden; padding: 221px; position: relative; width: auto; }", ".framer-Xo6nI .framer-1fddprw { aspect-ratio: 1.2848061029879212 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 347px); overflow: visible; position: relative; width: 445px; z-index: 1; }", ".framer-Xo6nI .framer-1kkhc4h { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; z-index: 1; }", ".framer-Xo6nI .framer-1v4xu87 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 506px; word-break: break-word; word-wrap: break-word; }", ".framer-Xo6nI .framer-q46gsf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 508px; word-break: break-word; word-wrap: break-word; }", ".framer-Xo6nI .framer-10wcl9c { align-content: center; align-items: center; background-color: #73c9ff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: center; overflow: hidden; padding: 70px; position: relative; width: auto; }", ".framer-Xo6nI .framer-82jw1a, .framer-Xo6nI .framer-1htmq1o, .framer-Xo6nI .framer-5pwaja { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-o137gh, .framer-Xo6nI .framer-q2kshs { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 590px; word-break: break-word; word-wrap: break-word; }", ".framer-Xo6nI .framer-19w3ta1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: auto; }", ".framer-Xo6nI .framer-1gml4mc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 11px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-1ntfirx, .framer-Xo6nI .framer-1ezsmbk, .framer-Xo6nI .framer-1ko9jab { align-content: center; align-items: center; background-color: rgba(0, 0, 0, 0.2); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 18px; height: 130px; justify-content: center; overflow: hidden; padding: 25px; position: relative; width: 430px; }", ".framer-Xo6nI .framer-17w5add, .framer-Xo6nI .framer-1oerm5a, .framer-Xo6nI .framer-1cac0h8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }", ".framer-Xo6nI .framer-g5ccxy, .framer-Xo6nI .framer-jpcaic, .framer-Xo6nI .framer-egt4hj, .framer-Xo6nI .framer-os3i0r, .framer-Xo6nI .framer-1okfqt3, .framer-Xo6nI .framer-1h2axyk { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }", ".framer-Xo6nI .framer-17c8bmx { aspect-ratio: 0.7866839043309631 / 1; flex: none; height: 437px; overflow: visible; position: relative; width: var(--framer-aspect-ratio-supported, 344px); z-index: 1; }", ".framer-Xo6nI .framer-1bm20k9 { align-content: center; align-items: center; background: linear-gradient(180deg, #73c9ff 0%, rgb(73, 131, 255) 100%); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 65px; height: min-content; justify-content: center; overflow: hidden; padding: 110px; position: relative; width: auto; }", ".framer-Xo6nI .framer-1ug3nha { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 478px); overflow: visible; position: relative; width: 478px; }", ".framer-Xo6nI .framer-11w5goj, .framer-Xo6nI .framer-1u68w5n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-w0eid7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 423px; word-break: break-word; word-wrap: break-word; }", ".framer-Xo6nI .framer-1mydc3e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-1r5upf8, .framer-Xo6nI .framer-q5pha3, .framer-Xo6nI .framer-1xvwv7o { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 5px; position: relative; width: 423px; }", ".framer-Xo6nI .framer-qdz15u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 423px; }", ".framer-Xo6nI .framer-1q5zez2, .framer-Xo6nI .framer-k1locj { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 5px; position: relative; width: 200px; }", ".framer-Xo6nI .framer-ike5nt { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 5px; position: relative; width: 423px; }", ".framer-Xo6nI .framer-18uxxfv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 300px; word-break: break-word; word-wrap: break-word; }", ".framer-Xo6nI .framer-1advuqa { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 300px); overflow: visible; position: relative; width: 300px; }", ".framer-Xo6nI .framer-1s0jiwp { align-content: center; align-items: center; background-color: #73c9ff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: hidden; padding: 110px; position: relative; width: auto; }", ".framer-Xo6nI .framer-watdzd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 27px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-ew5zgj-container, .framer-Xo6nI .framer-chnupn-container, .framer-Xo6nI .framer-qqdbxf-container, .framer-Xo6nI .framer-9z9tzr-container { flex: none; height: auto; position: relative; width: auto; }", ".framer-Xo6nI .framer-127hbt4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: auto; }", ".framer-Xo6nI .framer-g3yozp { --border-bottom-width: 0px; --border-color: #0051fe; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 5px; align-content: center; align-items: center; background-color: #ffffff; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 20px 100px 20px 100px; position: relative; width: 1px; }", ".framer-Xo6nI .framer-vpvn08 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-1hlmgd1 { aspect-ratio: 0.7373113854595336 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 81px); overflow: visible; position: relative; width: 60px; }", ".framer-Xo6nI .framer-18ypcjk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }", ".framer-Xo6nI .framer-k3m7z6, .framer-Xo6nI .framer-1rodr4e, .framer-Xo6nI .framer-1otllnz, .framer-Xo6nI .framer-xllpn9 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Xo6nI.framer-72rtr7, .framer-Xo6nI .framer-15dvlek, .framer-Xo6nI .framer-i6750o, .framer-Xo6nI .framer-1mcnaw7, .framer-Xo6nI .framer-8djxin, .framer-Xo6nI .framer-llcgay, .framer-Xo6nI .framer-mppc7z, .framer-Xo6nI .framer-1cpqo0y, .framer-Xo6nI .framer-hhy3o0, .framer-Xo6nI .framer-1xwjx91, .framer-Xo6nI .framer-15pk6g, .framer-Xo6nI .framer-fxx7z3, .framer-Xo6nI .framer-1bmeaj5, .framer-Xo6nI .framer-9mv6zo, .framer-Xo6nI .framer-1h0qo9t, .framer-Xo6nI .framer-jt1xtm, .framer-Xo6nI .framer-1mq4jzh, .framer-Xo6nI .framer-1h2um9p, .framer-Xo6nI .framer-1kkhc4h, .framer-Xo6nI .framer-10wcl9c, .framer-Xo6nI .framer-82jw1a, .framer-Xo6nI .framer-19w3ta1, .framer-Xo6nI .framer-1gml4mc, .framer-Xo6nI .framer-1ntfirx, .framer-Xo6nI .framer-17w5add, .framer-Xo6nI .framer-1ezsmbk, .framer-Xo6nI .framer-1oerm5a, .framer-Xo6nI .framer-1ko9jab, .framer-Xo6nI .framer-1cac0h8, .framer-Xo6nI .framer-1bm20k9, .framer-Xo6nI .framer-11w5goj, .framer-Xo6nI .framer-1htmq1o, .framer-Xo6nI .framer-1mydc3e, .framer-Xo6nI .framer-1q5zez2, .framer-Xo6nI .framer-k1locj, .framer-Xo6nI .framer-1s0jiwp, .framer-Xo6nI .framer-1u68w5n, .framer-Xo6nI .framer-5pwaja, .framer-Xo6nI .framer-watdzd, .framer-Xo6nI .framer-127hbt4, .framer-Xo6nI .framer-vpvn08, .framer-Xo6nI .framer-mfowa4, .framer-Xo6nI .framer-18ypcjk { gap: 0px; } .framer-Xo6nI.framer-72rtr7 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Xo6nI.framer-72rtr7 > :first-child, .framer-Xo6nI .framer-15dvlek > :first-child, .framer-Xo6nI .framer-i6750o > :first-child, .framer-Xo6nI .framer-1mq4jzh > :first-child, .framer-Xo6nI .framer-1kkhc4h > :first-child, .framer-Xo6nI .framer-10wcl9c > :first-child, .framer-Xo6nI .framer-82jw1a > :first-child, .framer-Xo6nI .framer-1gml4mc > :first-child, .framer-Xo6nI .framer-17w5add > :first-child, .framer-Xo6nI .framer-1oerm5a > :first-child, .framer-Xo6nI .framer-1cac0h8 > :first-child, .framer-Xo6nI .framer-11w5goj > :first-child, .framer-Xo6nI .framer-1htmq1o > :first-child, .framer-Xo6nI .framer-1mydc3e > :first-child, .framer-Xo6nI .framer-1s0jiwp > :first-child, .framer-Xo6nI .framer-1u68w5n > :first-child, .framer-Xo6nI .framer-5pwaja > :first-child, .framer-Xo6nI .framer-vpvn08 > :first-child { margin-top: 0px; } .framer-Xo6nI.framer-72rtr7 > :last-child, .framer-Xo6nI .framer-15dvlek > :last-child, .framer-Xo6nI .framer-i6750o > :last-child, .framer-Xo6nI .framer-1mq4jzh > :last-child, .framer-Xo6nI .framer-1kkhc4h > :last-child, .framer-Xo6nI .framer-10wcl9c > :last-child, .framer-Xo6nI .framer-82jw1a > :last-child, .framer-Xo6nI .framer-1gml4mc > :last-child, .framer-Xo6nI .framer-17w5add > :last-child, .framer-Xo6nI .framer-1oerm5a > :last-child, .framer-Xo6nI .framer-1cac0h8 > :last-child, .framer-Xo6nI .framer-11w5goj > :last-child, .framer-Xo6nI .framer-1htmq1o > :last-child, .framer-Xo6nI .framer-1mydc3e > :last-child, .framer-Xo6nI .framer-1s0jiwp > :last-child, .framer-Xo6nI .framer-1u68w5n > :last-child, .framer-Xo6nI .framer-5pwaja > :last-child, .framer-Xo6nI .framer-vpvn08 > :last-child { margin-bottom: 0px; } .framer-Xo6nI .framer-15dvlek > *, .framer-Xo6nI .framer-i6750o > *, .framer-Xo6nI .framer-1mq4jzh > *, .framer-Xo6nI .framer-17w5add > *, .framer-Xo6nI .framer-1oerm5a > *, .framer-Xo6nI .framer-1cac0h8 > *, .framer-Xo6nI .framer-1mydc3e > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Xo6nI .framer-1mcnaw7 > *, .framer-Xo6nI .framer-8djxin > *, .framer-Xo6nI .framer-mppc7z > *, .framer-Xo6nI .framer-1cpqo0y > *, .framer-Xo6nI .framer-hhy3o0 > *, .framer-Xo6nI .framer-1xwjx91 > *, .framer-Xo6nI .framer-15pk6g > *, .framer-Xo6nI .framer-fxx7z3 > *, .framer-Xo6nI .framer-9mv6zo > *, .framer-Xo6nI .framer-1h0qo9t > *, .framer-Xo6nI .framer-jt1xtm > *, .framer-Xo6nI .framer-127hbt4 > *, .framer-Xo6nI .framer-mfowa4 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Xo6nI .framer-1mcnaw7 > :first-child, .framer-Xo6nI .framer-8djxin > :first-child, .framer-Xo6nI .framer-llcgay > :first-child, .framer-Xo6nI .framer-mppc7z > :first-child, .framer-Xo6nI .framer-1cpqo0y > :first-child, .framer-Xo6nI .framer-hhy3o0 > :first-child, .framer-Xo6nI .framer-1xwjx91 > :first-child, .framer-Xo6nI .framer-15pk6g > :first-child, .framer-Xo6nI .framer-fxx7z3 > :first-child, .framer-Xo6nI .framer-1bmeaj5 > :first-child, .framer-Xo6nI .framer-9mv6zo > :first-child, .framer-Xo6nI .framer-1h0qo9t > :first-child, .framer-Xo6nI .framer-jt1xtm > :first-child, .framer-Xo6nI .framer-1h2um9p > :first-child, .framer-Xo6nI .framer-19w3ta1 > :first-child, .framer-Xo6nI .framer-1ntfirx > :first-child, .framer-Xo6nI .framer-1ezsmbk > :first-child, .framer-Xo6nI .framer-1ko9jab > :first-child, .framer-Xo6nI .framer-1bm20k9 > :first-child, .framer-Xo6nI .framer-1q5zez2 > :first-child, .framer-Xo6nI .framer-k1locj > :first-child, .framer-Xo6nI .framer-watdzd > :first-child, .framer-Xo6nI .framer-127hbt4 > :first-child, .framer-Xo6nI .framer-mfowa4 > :first-child, .framer-Xo6nI .framer-18ypcjk > :first-child { margin-left: 0px; } .framer-Xo6nI .framer-1mcnaw7 > :last-child, .framer-Xo6nI .framer-8djxin > :last-child, .framer-Xo6nI .framer-llcgay > :last-child, .framer-Xo6nI .framer-mppc7z > :last-child, .framer-Xo6nI .framer-1cpqo0y > :last-child, .framer-Xo6nI .framer-hhy3o0 > :last-child, .framer-Xo6nI .framer-1xwjx91 > :last-child, .framer-Xo6nI .framer-15pk6g > :last-child, .framer-Xo6nI .framer-fxx7z3 > :last-child, .framer-Xo6nI .framer-1bmeaj5 > :last-child, .framer-Xo6nI .framer-9mv6zo > :last-child, .framer-Xo6nI .framer-1h0qo9t > :last-child, .framer-Xo6nI .framer-jt1xtm > :last-child, .framer-Xo6nI .framer-1h2um9p > :last-child, .framer-Xo6nI .framer-19w3ta1 > :last-child, .framer-Xo6nI .framer-1ntfirx > :last-child, .framer-Xo6nI .framer-1ezsmbk > :last-child, .framer-Xo6nI .framer-1ko9jab > :last-child, .framer-Xo6nI .framer-1bm20k9 > :last-child, .framer-Xo6nI .framer-1q5zez2 > :last-child, .framer-Xo6nI .framer-k1locj > :last-child, .framer-Xo6nI .framer-watdzd > :last-child, .framer-Xo6nI .framer-127hbt4 > :last-child, .framer-Xo6nI .framer-mfowa4 > :last-child, .framer-Xo6nI .framer-18ypcjk > :last-child { margin-right: 0px; } .framer-Xo6nI .framer-llcgay > * { margin: 0px; margin-left: calc(33px / 2); margin-right: calc(33px / 2); } .framer-Xo6nI .framer-1bmeaj5 > * { margin: 0px; margin-left: calc(19px / 2); margin-right: calc(19px / 2); } .framer-Xo6nI .framer-1h2um9p > *, .framer-Xo6nI .framer-1bm20k9 > * { margin: 0px; margin-left: calc(65px / 2); margin-right: calc(65px / 2); } .framer-Xo6nI .framer-1kkhc4h > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Xo6nI .framer-10wcl9c > * { margin: 0px; margin-bottom: calc(35px / 2); margin-top: calc(35px / 2); } .framer-Xo6nI .framer-82jw1a > *, .framer-Xo6nI .framer-1htmq1o > *, .framer-Xo6nI .framer-5pwaja > * { margin: 0px; margin-bottom: calc(15px / 2); margin-top: calc(15px / 2); } .framer-Xo6nI .framer-19w3ta1 > * { margin: 0px; margin-left: calc(60px / 2); margin-right: calc(60px / 2); } .framer-Xo6nI .framer-1gml4mc > * { margin: 0px; margin-bottom: calc(11px / 2); margin-top: calc(11px / 2); } .framer-Xo6nI .framer-1ntfirx > *, .framer-Xo6nI .framer-1ezsmbk > *, .framer-Xo6nI .framer-1ko9jab > * { margin: 0px; margin-left: calc(18px / 2); margin-right: calc(18px / 2); } .framer-Xo6nI .framer-11w5goj > *, .framer-Xo6nI .framer-1u68w5n > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-Xo6nI .framer-1q5zez2 > *, .framer-Xo6nI .framer-k1locj > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-Xo6nI .framer-1s0jiwp > * { margin: 0px; margin-bottom: calc(28px / 2); margin-top: calc(28px / 2); } .framer-Xo6nI .framer-watdzd > * { margin: 0px; margin-left: calc(27px / 2); margin-right: calc(27px / 2); } .framer-Xo6nI .framer-vpvn08 > * { margin: 0px; margin-bottom: calc(4px / 2); margin-top: calc(4px / 2); } .framer-Xo6nI .framer-18ypcjk > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } }", "@media (min-width: 1200px) and (max-width: 1439px) { .framer-Xo6nI .hidden-72rtr7 { display: none !important; } }", `@media (min-width: 1440px) and (max-width: 1919px) { .framer-Xo6nI .hidden-19zrzkq { display: none !important; } .${Pe.bodyClassName}-framer-Xo6nI { background: rgb(0, 82, 255); } .framer-Xo6nI.framer-72rtr7 { width: 1440px; }}`, `@media (min-width: 1920px) { .framer-Xo6nI .hidden-4aoh7u { display: none !important; } .${Pe.bodyClassName}-framer-Xo6nI { background: rgb(0, 82, 255); } .framer-Xo6nI.framer-72rtr7 { width: 1920px; } .framer-Xo6nI .framer-7mtqmk { width: var(--framer-aspect-ratio-supported, 488px); } .framer-Xo6nI .framer-qjykua { width: 1321px; } .framer-Xo6nI .framer-h5v0mc-container, .framer-Xo6nI .framer-iss8an-container { height: 27px; width: 27px; } .framer-Xo6nI .framer-k9ch8q { height: 24px; width: 89px; } .framer-Xo6nI .framer-1h2um9p, .framer-Xo6nI .framer-10wcl9c, .framer-Xo6nI .framer-11w5goj, .framer-Xo6nI .framer-1s0jiwp { gap: 50px; } .framer-Xo6nI .framer-1fddprw { height: var(--framer-aspect-ratio-supported, 470px); width: 603px; } .framer-Xo6nI .framer-1kkhc4h, .framer-Xo6nI .framer-82jw1a, .framer-Xo6nI .framer-1htmq1o { gap: 25px; } .framer-Xo6nI .framer-1v4xu87 { width: 716px; } .framer-Xo6nI .framer-q46gsf, .framer-Xo6nI .framer-w0eid7, .framer-Xo6nI .framer-1mydc3e { align-self: stretch; width: auto; } .framer-Xo6nI .framer-o137gh, .framer-Xo6nI .framer-q2kshs { width: 1000px; } .framer-Xo6nI .framer-1gml4mc { gap: 29px; } .framer-Xo6nI .framer-1ntfirx, .framer-Xo6nI .framer-1ezsmbk, .framer-Xo6nI .framer-1ko9jab { height: 170px; width: 540px; } .framer-Xo6nI .framer-17c8bmx { height: 600px; width: var(--framer-aspect-ratio-supported, 472px); } .framer-Xo6nI .framer-1ug3nha { height: var(--framer-aspect-ratio-supported, 741px); width: 741px; } .framer-Xo6nI .framer-1r5upf8, .framer-Xo6nI .framer-q5pha3, .framer-Xo6nI .framer-1xvwv7o, .framer-Xo6nI .framer-ike5nt { width: auto; } .framer-Xo6nI .framer-qdz15u { gap: 10px; justify-content: center; width: auto; } .framer-Xo6nI .framer-1q5zez2, .framer-Xo6nI .framer-k1locj { flex: 1 0 0px; width: 1px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Xo6nI .framer-1h2um9p, .framer-Xo6nI .framer-1kkhc4h, .framer-Xo6nI .framer-10wcl9c, .framer-Xo6nI .framer-82jw1a, .framer-Xo6nI .framer-1gml4mc, .framer-Xo6nI .framer-11w5goj, .framer-Xo6nI .framer-1htmq1o, .framer-Xo6nI .framer-qdz15u, .framer-Xo6nI .framer-1s0jiwp { gap: 0px; } .framer-Xo6nI .framer-1h2um9p > * { margin: 0px; margin-left: calc(50px / 2); margin-right: calc(50px / 2); } .framer-Xo6nI .framer-1h2um9p > :first-child, .framer-Xo6nI .framer-qdz15u > :first-child { margin-left: 0px; } .framer-Xo6nI .framer-1h2um9p > :last-child, .framer-Xo6nI .framer-qdz15u > :last-child { margin-right: 0px; } .framer-Xo6nI .framer-1kkhc4h > *, .framer-Xo6nI .framer-82jw1a > *, .framer-Xo6nI .framer-1htmq1o > * { margin: 0px; margin-bottom: calc(25px / 2); margin-top: calc(25px / 2); } .framer-Xo6nI .framer-1kkhc4h > :first-child, .framer-Xo6nI .framer-10wcl9c > :first-child, .framer-Xo6nI .framer-82jw1a > :first-child, .framer-Xo6nI .framer-1gml4mc > :first-child, .framer-Xo6nI .framer-11w5goj > :first-child, .framer-Xo6nI .framer-1htmq1o > :first-child, .framer-Xo6nI .framer-1s0jiwp > :first-child { margin-top: 0px; } .framer-Xo6nI .framer-1kkhc4h > :last-child, .framer-Xo6nI .framer-10wcl9c > :last-child, .framer-Xo6nI .framer-82jw1a > :last-child, .framer-Xo6nI .framer-1gml4mc > :last-child, .framer-Xo6nI .framer-11w5goj > :last-child, .framer-Xo6nI .framer-1htmq1o > :last-child, .framer-Xo6nI .framer-1s0jiwp > :last-child { margin-bottom: 0px; } .framer-Xo6nI .framer-10wcl9c > *, .framer-Xo6nI .framer-11w5goj > *, .framer-Xo6nI .framer-1s0jiwp > * { margin: 0px; margin-bottom: calc(50px / 2); margin-top: calc(50px / 2); } .framer-Xo6nI .framer-1gml4mc > * { margin: 0px; margin-bottom: calc(29px / 2); margin-top: calc(29px / 2); } .framer-Xo6nI .framer-qdz15u > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }}`, `@media (max-width: 809px) { .framer-Xo6nI .hidden-obpi3w { display: none !important; } .${Pe.bodyClassName}-framer-Xo6nI { background: rgb(0, 82, 255); } .framer-Xo6nI.framer-72rtr7 { width: 390px; } .framer-Xo6nI .framer-15dvlek { gap: 21px; padding: 0px; } .framer-Xo6nI .framer-i6750o { gap: 18px; order: 0; padding: 0px; } .framer-Xo6nI .framer-1u87dxm { white-space: pre-wrap; width: 300px; word-break: break-word; word-wrap: break-word; } .framer-Xo6nI .framer-10p2vyu { opacity: 0.52; white-space: pre-wrap; width: 300px; word-break: break-word; word-wrap: break-word; } .framer-Xo6nI .framer-8djxin { text-decoration: none; } .framer-Xo6nI .framer-fxx7z3 { order: 4; } .framer-Xo6nI .framer-hz7jyh { height: var(--framer-aspect-ratio-supported, 243px); order: 2; } .framer-Xo6nI .framer-1bmeaj5 { min-height: unset; min-width: unset; order: 3; } .framer-Xo6nI .framer-1dkmsb0, .framer-Xo6nI .framer-1kkhc4h, .framer-Xo6nI .framer-1htmq1o { order: 0; } .framer-Xo6nI .framer-oi02d5, .framer-Xo6nI .framer-1gml4mc, .framer-Xo6nI .framer-1advuqa { order: 1; } .framer-Xo6nI .framer-jt1xtm, .framer-Xo6nI .framer-19w3ta1, .framer-Xo6nI .framer-127hbt4 { flex-direction: column; } .framer-Xo6nI .framer-19mz5rk-container { flex: none; width: auto; } .framer-Xo6nI .framer-1h2um9p { flex-direction: column; padding: 93px; } .framer-Xo6nI .framer-1fddprw { height: var(--framer-aspect-ratio-supported, 213px); order: 1; width: 273px; } .framer-Xo6nI .framer-1v4xu87, .framer-Xo6nI .framer-q46gsf, .framer-Xo6nI .framer-o137gh, .framer-Xo6nI .framer-w0eid7, .framer-Xo6nI .framer-q2kshs { width: 350px; } .framer-Xo6nI .framer-10wcl9c { padding: 50px 0px 50px 0px; } .framer-Xo6nI .framer-tak5yt, .framer-Xo6nI .framer-1gbxg0n, .framer-Xo6nI .framer-wef9sr { white-space: pre-wrap; width: 350px; word-break: break-word; word-wrap: break-word; } .framer-Xo6nI .framer-1ntfirx, .framer-Xo6nI .framer-1ezsmbk, .framer-Xo6nI .framer-1ko9jab { height: min-content; width: 350px; } .framer-Xo6nI .framer-17c8bmx { height: var(--framer-aspect-ratio-supported, 356px); order: 0; width: 280px; } .framer-Xo6nI .framer-1bm20k9 { flex-direction: column; padding: 51px 110px 51px 110px; } .framer-Xo6nI .framer-1mydc3e { order: 2; width: 350px; } .framer-Xo6nI .framer-1r5upf8, .framer-Xo6nI .framer-q5pha3, .framer-Xo6nI .framer-1xvwv7o, .framer-Xo6nI .framer-ike5nt, .framer-Xo6nI .framer-ew5zgj-container, .framer-Xo6nI .framer-chnupn-container, .framer-Xo6nI .framer-qqdbxf-container, .framer-Xo6nI .framer-9z9tzr-container { width: auto; } .framer-Xo6nI .framer-qdz15u { gap: 10px; justify-content: center; width: auto; } .framer-Xo6nI .framer-1q5zez2, .framer-Xo6nI .framer-k1locj { flex: 1 0 0px; width: 1px; } .framer-Xo6nI .framer-1s0jiwp { padding: 65px 110px 65px 110px; } .framer-Xo6nI .framer-watdzd { flex-direction: column; gap: 20px; width: 350px; } .framer-Xo6nI .framer-g3yozp { flex: none; padding: 25px; width: auto; } .framer-Xo6nI .framer-vpvn08 { align-content: flex-start; align-items: flex-start; gap: 0px; } .framer-Xo6nI .framer-1hlmgd1 { height: 54px; width: var(--framer-aspect-ratio-supported, 40px); } .framer-Xo6nI .framer-18ypcjk { align-content: flex-end; align-items: flex-end; flex-direction: column; gap: 11px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Xo6nI .framer-15dvlek, .framer-Xo6nI .framer-i6750o, .framer-Xo6nI .framer-jt1xtm, .framer-Xo6nI .framer-1h2um9p, .framer-Xo6nI .framer-19w3ta1, .framer-Xo6nI .framer-1bm20k9, .framer-Xo6nI .framer-qdz15u, .framer-Xo6nI .framer-watdzd, .framer-Xo6nI .framer-127hbt4, .framer-Xo6nI .framer-vpvn08, .framer-Xo6nI .framer-18ypcjk { gap: 0px; } .framer-Xo6nI .framer-15dvlek > * { margin: 0px; margin-bottom: calc(21px / 2); margin-top: calc(21px / 2); } .framer-Xo6nI .framer-15dvlek > :first-child, .framer-Xo6nI .framer-i6750o > :first-child, .framer-Xo6nI .framer-jt1xtm > :first-child, .framer-Xo6nI .framer-1h2um9p > :first-child, .framer-Xo6nI .framer-19w3ta1 > :first-child, .framer-Xo6nI .framer-1bm20k9 > :first-child, .framer-Xo6nI .framer-watdzd > :first-child, .framer-Xo6nI .framer-127hbt4 > :first-child, .framer-Xo6nI .framer-vpvn08 > :first-child, .framer-Xo6nI .framer-18ypcjk > :first-child { margin-top: 0px; } .framer-Xo6nI .framer-15dvlek > :last-child, .framer-Xo6nI .framer-i6750o > :last-child, .framer-Xo6nI .framer-jt1xtm > :last-child, .framer-Xo6nI .framer-1h2um9p > :last-child, .framer-Xo6nI .framer-19w3ta1 > :last-child, .framer-Xo6nI .framer-1bm20k9 > :last-child, .framer-Xo6nI .framer-watdzd > :last-child, .framer-Xo6nI .framer-127hbt4 > :last-child, .framer-Xo6nI .framer-vpvn08 > :last-child, .framer-Xo6nI .framer-18ypcjk > :last-child { margin-bottom: 0px; } .framer-Xo6nI .framer-i6750o > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-Xo6nI .framer-jt1xtm > *, .framer-Xo6nI .framer-127hbt4 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Xo6nI .framer-1h2um9p > *, .framer-Xo6nI .framer-1bm20k9 > * { margin: 0px; margin-bottom: calc(65px / 2); margin-top: calc(65px / 2); } .framer-Xo6nI .framer-19w3ta1 > * { margin: 0px; margin-bottom: calc(60px / 2); margin-top: calc(60px / 2); } .framer-Xo6nI .framer-qdz15u > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Xo6nI .framer-qdz15u > :first-child { margin-left: 0px; } .framer-Xo6nI .framer-qdz15u > :last-child { margin-right: 0px; } .framer-Xo6nI .framer-watdzd > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-Xo6nI .framer-vpvn08 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Xo6nI .framer-18ypcjk > * { margin: 0px; margin-bottom: calc(11px / 2); margin-top: calc(11px / 2); } }}`, `@media (min-width: 810px) and (max-width: 1199px) { .framer-Xo6nI .hidden-nou40q { display: none !important; } .${Pe.bodyClassName}-framer-Xo6nI { background: rgb(0, 82, 255); } .framer-Xo6nI.framer-72rtr7 { width: 810px; } .framer-Xo6nI .framer-15dvlek { gap: 21px; padding: 0px; } .framer-Xo6nI .framer-i6750o { gap: 0px; order: 0; padding: 0px; } .framer-Xo6nI .framer-1u87dxm, .framer-Xo6nI .framer-tak5yt, .framer-Xo6nI .framer-1gbxg0n, .framer-Xo6nI .framer-wef9sr { white-space: pre-wrap; width: 660px; word-break: break-word; word-wrap: break-word; } .framer-Xo6nI .framer-10p2vyu { align-self: stretch; opacity: 0.52; white-space: pre-wrap; word-break: break-word; word-wrap: break-word; } .framer-Xo6nI .framer-fxx7z3 { order: 3; } .framer-Xo6nI .framer-hz7jyh { height: var(--framer-aspect-ratio-supported, 216px); order: 2; width: 159px; } .framer-Xo6nI .framer-jt1xtm, .framer-Xo6nI .framer-127hbt4 { flex-direction: column; } .framer-Xo6nI .framer-19mz5rk-container { flex: none; width: auto; } .framer-Xo6nI .framer-1h2um9p { flex-direction: column; padding: 93px; } .framer-Xo6nI .framer-1fddprw { height: var(--framer-aspect-ratio-supported, 352px); order: 1; width: 452px; } .framer-Xo6nI .framer-1kkhc4h, .framer-Xo6nI .framer-1htmq1o { order: 0; } .framer-Xo6nI .framer-1v4xu87, .framer-Xo6nI .framer-q46gsf, .framer-Xo6nI .framer-o137gh, .framer-Xo6nI .framer-w0eid7, .framer-Xo6nI .framer-q2kshs { width: 660px; } .framer-Xo6nI .framer-10wcl9c { padding: 50px 0px 50px 0px; } .framer-Xo6nI .framer-1gml4mc, .framer-Xo6nI .framer-1advuqa { order: 1; } .framer-Xo6nI .framer-1ntfirx, .framer-Xo6nI .framer-1ezsmbk, .framer-Xo6nI .framer-1ko9jab { height: min-content; width: 350px; } .framer-Xo6nI .framer-17c8bmx { height: var(--framer-aspect-ratio-supported, 366px); order: 0; width: 288px; } .framer-Xo6nI .framer-1bm20k9 { flex-direction: column; padding: 51px 110px 51px 110px; } .framer-Xo6nI .framer-1mydc3e { align-self: stretch; order: 2; width: auto; } .framer-Xo6nI .framer-1r5upf8, .framer-Xo6nI .framer-q5pha3, .framer-Xo6nI .framer-1xvwv7o, .framer-Xo6nI .framer-ike5nt { width: auto; } .framer-Xo6nI .framer-qdz15u { gap: 10px; justify-content: center; width: auto; } .framer-Xo6nI .framer-1q5zez2, .framer-Xo6nI .framer-k1locj { flex: 1 0 0px; width: 1px; } .framer-Xo6nI .framer-1s0jiwp { padding: 65px 110px 65px 110px; } .framer-Xo6nI .framer-watdzd { gap: 20px; } .framer-Xo6nI .framer-g3yozp { flex: none; padding: 25px; width: auto; } .framer-Xo6nI .framer-vpvn08 { align-content: flex-start; align-items: flex-start; gap: 0px; } .framer-Xo6nI .framer-1hlmgd1 { height: 54px; width: var(--framer-aspect-ratio-supported, 40px); } .framer-Xo6nI .framer-18ypcjk { align-content: flex-end; align-items: flex-end; flex-direction: column; gap: 11px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-Xo6nI .framer-15dvlek, .framer-Xo6nI .framer-i6750o, .framer-Xo6nI .framer-jt1xtm, .framer-Xo6nI .framer-1h2um9p, .framer-Xo6nI .framer-1bm20k9, .framer-Xo6nI .framer-qdz15u, .framer-Xo6nI .framer-watdzd, .framer-Xo6nI .framer-127hbt4, .framer-Xo6nI .framer-vpvn08, .framer-Xo6nI .framer-18ypcjk { gap: 0px; } .framer-Xo6nI .framer-15dvlek > * { margin: 0px; margin-bottom: calc(21px / 2); margin-top: calc(21px / 2); } .framer-Xo6nI .framer-15dvlek > :first-child, .framer-Xo6nI .framer-i6750o > :first-child, .framer-Xo6nI .framer-jt1xtm > :first-child, .framer-Xo6nI .framer-1h2um9p > :first-child, .framer-Xo6nI .framer-1bm20k9 > :first-child, .framer-Xo6nI .framer-127hbt4 > :first-child, .framer-Xo6nI .framer-vpvn08 > :first-child, .framer-Xo6nI .framer-18ypcjk > :first-child { margin-top: 0px; } .framer-Xo6nI .framer-15dvlek > :last-child, .framer-Xo6nI .framer-i6750o > :last-child, .framer-Xo6nI .framer-jt1xtm > :last-child, .framer-Xo6nI .framer-1h2um9p > :last-child, .framer-Xo6nI .framer-1bm20k9 > :last-child, .framer-Xo6nI .framer-127hbt4 > :last-child, .framer-Xo6nI .framer-vpvn08 > :last-child, .framer-Xo6nI .framer-18ypcjk > :last-child { margin-bottom: 0px; } .framer-Xo6nI .framer-i6750o > *, .framer-Xo6nI .framer-vpvn08 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Xo6nI .framer-jt1xtm > *, .framer-Xo6nI .framer-127hbt4 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-Xo6nI .framer-1h2um9p > *, .framer-Xo6nI .framer-1bm20k9 > * { margin: 0px; margin-bottom: calc(65px / 2); margin-top: calc(65px / 2); } .framer-Xo6nI .framer-qdz15u > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Xo6nI .framer-qdz15u > :first-child, .framer-Xo6nI .framer-watdzd > :first-child { margin-left: 0px; } .framer-Xo6nI .framer-qdz15u > :last-child, .framer-Xo6nI .framer-watdzd > :last-child { margin-right: 0px; } .framer-Xo6nI .framer-watdzd > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-Xo6nI .framer-18ypcjk > * { margin: 0px; margin-bottom: calc(11px / 2); margin-top: calc(11px / 2); } }}`, ...je, '.framer-Xo6nI[data-border="true"]::after, .framer-Xo6nI [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: auto; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }']
  , Ze = _e(Ea, Ga, "framer-Xo6nI")
  , Co = Ze;
Ze.displayName = "Home";
Ze.defaultProps = {
    height: 3702.5,
    width: 1200
};
Ne(Ze, [{
    explicitInter: !0,
    fonts: [{
        family: "Paytone One",
        source: "google",
        style: "normal",
        url: "https://fonts.gstatic.com/s/paytoneone/v23/0nksC9P7MfYHj2oFtYm2CiTvivr9iBq_.woff2",
        weight: "400"
    }, {
        family: "Satoshi",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/NHPGVFYUXYXE33DZ75OIT4JFGHITX5PE/PSUTMASCDJTVPERDYJZPN23BVUFUCQIF/J64QX5IPOHK56I2KYUNBQ5M2XWZEYKYX.woff2",
        weight: "900"
    }, {
        family: "Satoshi",
        source: "fontshare",
        style: "normal",
        url: "https://framerusercontent.com/third-party-assets/fontshare/wf/P2LQKHE6KA6ZP4AAGN72KDWMHH6ZH3TA/ZC32TK2P7FPS5GFTL46EU6KQJA24ZYDB/7AHDUZ4A7LFLVFUIFSARGIWCRQJHISQP.woff2",
        weight: "500"
    }]
}, ...Ia, ...ka, ...Aa, ...Me(Ue)], {
    supportsExplicitInterCodegen: !0
});
var Io = {
    exports: {
        Props: {
            type: "tsType",
            annotations: {
                framerContractVersion: "1"
            }
        },
        default: {
            type: "reactComponent",
            name: "FrameraugiA20Il",
            slots: [],
            annotations: {
                framerImmutableVariables: "true",
                framerIntrinsicWidth: "1200",
                framerContractVersion: "1",
                framerComponentViewportWidth: "true",
                framerDisplayContentsDiv: "false",
                framerResponsiveScreen: "",
                framerCanvasComponentVariantDetails: '{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"CzB_Ri4kE":{"layout":["fixed","auto"]},"wFNTSY3sV":{"layout":["fixed","auto"]},"AInDkfxQO":{"layout":["fixed","auto"]},"eVc1_vAod":{"layout":["fixed","auto"]}}}',
                framerIntrinsicHeight: "3702.5"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {Io as __FramerMetadata__, Co as default};
//# sourceMappingURL=xGiId_BuOVQZu-pdmHf5jq61k3EBt1TGdU8I9Tm4x3A.6MEIPHH7.mjs.map
