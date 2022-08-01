export interface ConfigOptions {
  version: string
  openPaths: string[]
  openDirectory: string|null
  dialogPaths: {
    askFileDialog: string
    askDirDialog: string
    askLangFileDialog: string
  }
  window: {
    nativeAppearance: boolean
    sidebarVisible: boolean
    currentSidebarTab: 'toc'|'references'|'relatedFiles'|'attachments'
    recentGlobalSearches: string[]
  }
  attachmentExtensions: string[]
  darkMode: boolean
  alwaysReloadFiles: boolean
  autoDarkMode: 'off'|'system'|'schedule'|'auto'
  autoDarkModeStart: string
  autoDarkModeEnd: string
  fileMeta: boolean
  fileMetaTime: 'modtime'|'creationtime'
  sorting: 'natural'|'ascii'
  sortFoldersFirst: boolean
  sortingTime: 'modtime'|'creationtime'
  muteLines: boolean
  fileManagerMode: 'thin'|'combined'|'expanded'
  fileNameDisplay: 'filename'|'title'|'heading'|'title+heading'
  newFileNamePattern: string
  newFileDontPrompt: boolean
  export: {
    dir: 'temp'|'cwd'|'ask'
    stripTags: boolean
    stripLinks: 'full'|'unlink'|'no'
    cslLibrary: string
    cslStyle: string
    useBundledPandoc: boolean
    singleFileLastExporter: string
  }
  zkn: {
    idRE: string
    idGen: string
    linkStart: string
    linkEnd: string
    linkFilenameOnly: boolean
    linkWithFilename: 'always'|'never'|'withID'
    autoCreateLinkedFiles: boolean
    autoSearch: boolean
    customDirectory: string
  }
  editor: {
    autocompleteAcceptSpace: boolean
    autoSave: 'off'|'immediately'|'delayed'
    citeStyle: 'in-text'|'in-text-suffix'|'regular'
    autoCloseBrackets: boolean
    defaultSaveImagePath: string
    homeEndBehaviour: boolean
    enableTableHelper: boolean
    indentUnit: number
    indentWithTabs: boolean
    fontSize: number
    countChars: boolean
    inputMode: 'default'|'vim'|'emacs'
    boldFormatting: '**'|'__'
    italicFormatting: '_'|'*'
    readabilityAlgorithm: string
    direction: 'ltr'|'rtl'
    rtlMoveVisually: boolean
    autoCorrect: {
      active: boolean
      style: 'LibreOffice'|'Word'
      magicQuotes: {
        primary: string
        secondary: string
      }
      replacements: Array<{ key: string, value: string }>
    }
  }
  display: {
    theme: 'berlin'|'frankfurt'|'bielefeld'|'karl-marx-stadt'|'bordeaux'
    useSystemAccentColor: boolean
    hideToolbarInDistractionFree: boolean
    markdownFileExtensions: boolean
    imageWidth: number
    imageHeight: number
    renderCitations: boolean
    renderIframes: boolean
    renderImages: boolean
    renderLinks: boolean
    renderMath: boolean
    renderTasks: boolean
    renderHTags: boolean
    renderEmphasis: boolean
  }
  selectedDicts: string[]
  appLang: string
  debug: boolean
  watchdog: {
    activatePolling: boolean
    stabilityThreshold: number
  }
  system: {
    deleteOnFail: boolean
    leaveAppRunning: boolean
    avoidNewTabs: boolean
    iframeWhitelist: string[]
    checkForUpdates: boolean
    checkForTranslationUpdates: boolean
    zoomBehavior: 'gui'|'editor'
  }
  checkForBeta: boolean
  displayToolbarButtons: {
    showOpenPreferencesButton: boolean
    showNewFileButton: boolean
    showPreviousFileButton: boolean
    showNextFileButton: boolean
    showToggleReadabilityButton: boolean
    showMarkdownCommentButton: boolean
    showMarkdownLinkButton: boolean
    showMarkdownImageButton: boolean
    showMarkdownMakeTaskListButton: boolean
    showInsertTableButton: boolean
    showInsertFootnoteButton: boolean
    showDocumentInfoText: boolean
    showPomodoroButton: boolean
  }
  uuid: string
}
