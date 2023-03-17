export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    Decimal: any;
    EMAIL: any;
    Date: any;
    DateTimeUtc: any;
    JSON: any;
    Mixed: any;
    StringInteger: any;
    DateEnd: any;
    DateTime: any;
};

export type Query = {
    __typename?: 'Query';
    language?: Maybe<Languages>;
    accountLimit?: Maybe<AccountLimit>;
    accountReachedLimit?: Maybe<AccountReachedLimit>;
    accountStatement?: Maybe<AccountStatement>;
    downloadAccountStatementPdf?: Maybe<RawFile>;
    downloadAccountStatementXls?: Maybe<RawFile>;
    downloadAccountStatementCsv?: Maybe<RawFile>;
    account?: Maybe<Account>;
    accountStates: Array<AccountState>;
    clientList: Array<AccountClient>;
    activeSessions?: Maybe<ActiveSessions>;
    activityLogs?: Maybe<ActivityLogs>;
    applicantIndividual?: Maybe<ApplicantIndividual>;
    owners: Array<ApplicantIndividual>;
    applicantBankingAccess?: Maybe<ApplicantBankingAccess>;
    grantedBankingAccess?: Maybe<ApplicantBankingAccesses>;
    applicantBankingAccesses?: Maybe<ApplicantBankingAccesses>;
    applicantCompany?: Maybe<ApplicantCompany>;
    getMatchedUsers: Array<ApplicantIndividualCompany>;
    getMatchedApplicantIndividuals: Array<ApplicantIndividualCompany>;
    applicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
    applicantCompanyLabels: Array<ApplicantCompanyLabel>;
    applicantCompanyModules: Array<ApplicantCompanyModules>;
    applicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
    applicantDocument?: Maybe<ApplicantDocument>;
    applicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
    applicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
    applicantIndividualModules: Array<ApplicantIndividualModules>;
    applicantKycLevel?: Maybe<ApplicantKycLevel>;
    applicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
    applicantIndividualLabels: Array<ApplicantIndividualLabel>;
    applicantLinkedCompanies: Array<ApplicantLinkedCompany>;
    applicant_module?: Maybe<ApplicantModules>;
    applicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
    applicantRiskLevel?: Maybe<ApplicantRiskLevel>;
    applicantState?: Maybe<ApplicantState>;
    applicantStateReason?: Maybe<ApplicantStateReason>;
    applicantStatus?: Maybe<ApplicantStatus>;
    applicantVerificationStatuses: Array<ApplicantVerificationStatus>;
    authenticationLogs?: Maybe<AuthenticationLogs>;
    authenticationMemberLogs?: Maybe<AuthenticationLogs>;
    bankCorrespondent: BankCorrespondent;
    businessActivity?: Maybe<BusinessActivity>;
    commissionPriceList?: Maybe<CommissionPriceList>;
    commissionTemplate?: Maybe<CommissionTemplate>;
    commissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
    commissionTemplateLimitActionType?: Maybe<CommissionTemplateLimitActionType>;
    commissionTemplateLimitPeriod?: Maybe<CommissionTemplateLimitPeriod>;
    commissionTemplateLimitTransferDirection?: Maybe<CommissionTemplateLimitTransferDirection>;
    commissionTemplateLimitType?: Maybe<CommissionTemplateLimitType>;
    company?: Maybe<Company>;
    companyModules: Array<CompanyModule>;
    companyModuleIbanProviderPassword?: Maybe<CompanyModuleIbanProviderPassword>;
    companyModuleProviderPassword?: Maybe<CompanyModulePaymentProviderPassword>;
    country?: Maybe<Country>;
    currency?: Maybe<Currencies>;
    dashboardAccountsStatistic?: Maybe<Array<Maybe<DashboardAccountsStatistic>>>;
    dashboardTicketsStatistic?: Maybe<Array<Maybe<DashboardTicketsStatistic>>>;
    dashboardTransfersStatistic?: Maybe<Array<Maybe<DashboardTransfersStatistic>>>;
    dashboardUsersStatistic?: Maybe<Array<Maybe<DashboardUsersStatistic>>>;
    department?: Maybe<Department>;
    departmentPosition?: Maybe<DepartmentPosition>;
    documentStates: Array<DocumentState>;
    documentTypes: Array<DocumentType>;
    emailNotification?: Maybe<EmailNotification>;
    emailSmtp?: Maybe<EmailSmtp>;
    emailSmtps: Array<EmailSmtp>;
    emailTemplateLayout?: Maybe<EmailTemplateLayout>;
    emailTemplate?: Maybe<EmailTemplate>;
    emailTemplates: Array<EmailTemplate>;
    employees: Array<Employee>;
    feeDetails: Fee;
    feeModes: Array<FeeMode>;
    feePeriods: Array<FeePeriod>;
    feeTypes: Array<FeeType>;
    file?: Maybe<Files>;
    group_type?: Maybe<GroupType>;
    group_types: Array<GroupType>;
    kycTimeline?: Maybe<KycTimeline>;
    kycTimelines?: Maybe<KycTimelines>;
    memberAccessLimitation?: Maybe<MemberAccessLimitation>;
    memberProfile?: Maybe<MemberProfile>;
    memberStatuses: Array<MemberStatus>;
    member?: Maybe<Members>;
    module?: Maybe<Module>;
    modules: Array<Module>;
    modulesWithKyc?: Maybe<Array<Module>>;
    operationTypes: Array<OperationType>;
    paymentBank?: Maybe<PaymentBank>;
    paymentProvider?: Maybe<PaymentProvider>;
    paymentProviderIban: PaymentProviderIban;
    paymentStatuses: Array<PaymentStatus>;
    paymentSystem?: Maybe<PaymentSystem>;
    paymentSystemsList: Array<PaymentSystem>;
    getPaymentUrgencys: Array<PaymentUrgency>;
    senders?: Maybe<Array<Maybe<Sender>>>;
    payment?: Maybe<Payments>;
    permission?: Maybe<Permissions>;
    permissions_tree?: Maybe<Permissions>;
    permissions?: Maybe<Array<Maybe<PermissionCategory>>>;
    priceListFees: Array<PriceListFee>;
    project?: Maybe<Project>;
    projectApiSettings: Array<ProjectApiSetting>;
    projectApiSettingPassword?: Maybe<ProjectApiSettingPassword>;
    region: Region;
    requisite?: Maybe<Requisite>;
    requisites: Array<Requisite>;
    downloadRequisiteDetails?: Maybe<RawFile>;
    sendRequisiteDetails?: Maybe<StatusType>;
    respondentFees: Array<RespondentFee>;
    role?: Maybe<Role>;
    states: Array<State>;
    stateReasons: Array<StateReason>;
    ticketComment?: Maybe<TicketComments>;
    getTicketComments: Array<TicketComments>;
    ticket?: Maybe<Ticket>;
    transferIncoming: TransferIncoming;
    transferIncomingsStatistic?: Maybe<Array<Maybe<TransferIncomingStatistic>>>;
    transferOutgoing: TransferOutgoing;
    transferOutgoingsStatistic?: Maybe<Array<Maybe<TransferOutgoingStatistic>>>;
    twoFactorAuth?: Maybe<TwoFactorAuthSettings>;
    typeOfIndustries: Array<TypeOfIndustry>;
    userAuthData: UserAuthResponse;
    applicantAccounts?: Maybe<Array<ApplicantAccount>>;
    applicantDevices?: Maybe<Array<ApplicantDevice>>;
    applicantProfile?: Maybe<ApplicantProfile>;
    applicantRequisite?: Maybe<ApplicantDetailsRequisites>;
    applicantRequisites: Array<ApplicantRequisites>;
    downloadApplicantRequisiteDetails?: Maybe<RawFile>;
    sendApplicantRequisiteDetails?: Maybe<StatusType>;
    languages?: Maybe<LanguagesPaginator>;
    accountLimits?: Maybe<AccountLimitPaginator>;
    accountReachedLimits?: Maybe<AccountReachedLimitPaginator>;
    accountList?: Maybe<AccountPaginator>;
    applicantIndividuals?: Maybe<ApplicantIndividualPaginator>;
    applicantCompanies?: Maybe<ApplicantCompanyPaginator>;
    applicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessTypePaginator>;
    applicantCompanyLabelsAvailable?: Maybe<ApplicantCompanyLabelPaginator>;
    applicantCompanyNotes?: Maybe<ApplicantCompanyNotesPaginator>;
    applicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistoryPaginator>;
    applicantDocuments?: Maybe<ApplicantDocumentPaginator>;
    applicantDocumentInternalNotes?: Maybe<ApplicantDocumentInternalNotePaginator>;
    applicantDocumentTags?: Maybe<ApplicantDocumentTagPaginator>;
    applicantDocumentTagCategories?: Maybe<ApplicantDocumentTagCategoryPaginator>;
    applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
    applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
    applicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistoryPaginator>;
    applicantKycLevels?: Maybe<ApplicantKycLevelPaginator>;
    applicantIndividualLabelsAvailable?: Maybe<ApplicantIndividualLabelPaginator>;
    applicant_modules?: Maybe<ApplicantModulesPaginator>;
    applicantIndividualNotes?: Maybe<ApplicantIndividualNotesPaginator>;
    applicantRiskLevels?: Maybe<ApplicantRiskLevelPaginator>;
    applicantStates?: Maybe<ApplicantStatePaginator>;
    applicantStateReasons?: Maybe<ApplicantStateReasonPaginator>;
    applicantStatuses?: Maybe<ApplicantStatusPaginator>;
    bankCorrespondents?: Maybe<BankCorrespondentPaginator>;
    businessActivities?: Maybe<BusinessActivityPaginator>;
    commissionPriceLists?: Maybe<CommissionPriceListPaginator>;
    commissionTemplates?: Maybe<CommissionTemplatePaginator>;
    commissionTemplateLimits?: Maybe<CommissionTemplateLimitPaginator>;
    commissionTemplateLimitActionTypes?: Maybe<CommissionTemplateLimitActionTypePaginator>;
    commissionTemplateLimitPeriods?: Maybe<CommissionTemplateLimitPeriodPaginator>;
    commissionTemplateLimitTransferDirections?: Maybe<CommissionTemplateLimitTransferDirectionPaginator>;
    commissionTemplateLimitTypes?: Maybe<CommissionTemplateLimitTypePaginator>;
    companies?: Maybe<CompanyPaginator>;
    countries?: Maybe<CountryPaginator>;
    currencies?: Maybe<CurrenciesPaginator>;
    departments?: Maybe<DepartmentPaginator>;
    departmentPositions?: Maybe<DepartmentPositionPaginator>;
    emailNotifications?: Maybe<EmailNotificationPaginator>;
    files?: Maybe<FilesPaginator>;
    groupTypeList?: Maybe<GroupTypePaginator>;
    groups?: Maybe<GroupRolePaginator>;
    groupList?: Maybe<GroupRoleViewPaginator>;
    memberAccessLimitations?: Maybe<MemberAccessLimitationPaginator>;
    members?: Maybe<MembersPaginator>;
    paymentBanks?: Maybe<PaymentBankPaginator>;
    paymentProviders?: Maybe<PaymentProviderPaginator>;
    paymentProviderIbans?: Maybe<PaymentProviderIbanPaginator>;
    paymentSystems?: Maybe<PaymentSystemPaginator>;
    payments?: Maybe<PaymentsPaginator>;
    projects?: Maybe<ProjectPaginator>;
    regions?: Maybe<RegionPaginator>;
    roles?: Maybe<RolePaginator>;
    tickets?: Maybe<TicketPaginator>;
    transferIncomings?: Maybe<TransferIncomingPaginator>;
    transferIncomingHistory?: Maybe<TransferIncomingHistoryPaginator>;
    transferOutgoings?: Maybe<TransferOutgoingPaginator>;
    transferOutgoingHistory?: Maybe<TransferOutgoingHistoryPaginator>;
    twoFactorsAuth?: Maybe<TwoFactorAuthSettingsPaginator>;
    users?: Maybe<UsersPaginator>;
};


export type QueryLanguageArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountLimitArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountReachedLimitArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryAccountStatementArgs = {
    account_id: Scalars['ID'];
    created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadAccountStatementPdfArgs = {
    account_id: Scalars['ID'];
    created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadAccountStatementXlsArgs = {
    account_id: Scalars['ID'];
    created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadAccountStatementCsvArgs = {
    account_id: Scalars['ID'];
    created_at?: InputMaybe<DateTimeRange>;
};


export type QueryAccountArgs = {
    id: Scalars['ID'];
};


export type QueryAccountStatesArgs = {
    orderBy?: InputMaybe<Array<QueryAccountStatesOrderByOrderByClause>>;
};


export type QueryClientListArgs = {
    group_type?: InputMaybe<Scalars['ID']>;
};


export type QueryActiveSessionsArgs = {
    page?: InputMaybe<Scalars['Int']>;
    count?: InputMaybe<Scalars['Int']>;
    query?: InputMaybe<QueryActiveSessionsStatic>;
};


export type QueryActivityLogsArgs = {
    page?: InputMaybe<Scalars['Int']>;
    count?: InputMaybe<Scalars['Int']>;
    query?: InputMaybe<QueryActivityLogsStatic>;
    orderBy?: InputMaybe<Array<OrderBy>>;
};


export type QueryApplicantIndividualArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryOwnersArgs = {
    orderBy?: InputMaybe<Array<QueryOwnersOrderByOrderByClause>>;
};


export type QueryApplicantBankingAccessArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryGrantedBankingAccessArgs = {
    applicant_individual_id: Scalars['ID'];
    applicant_company_id: Scalars['ID'];
    page?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<QueryGrantedBankingAccessFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryGrantedBankingAccessOrderByOrderByClause>>;
};


export type QueryApplicantBankingAccessesArgs = {
    applicant_company_id: Scalars['ID'];
    page?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    filter?: InputMaybe<QueryApplicantBankingAccessesFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantBankingAccessesOrderByOrderByClause>>;
};


export type QueryApplicantCompanyArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetMatchedUsersArgs = {
    applicant_company_id: Scalars['ID'];
    filter?: InputMaybe<QueryGetMatchedUsersFilterFilterConditions>;
};


export type QueryGetMatchedApplicantIndividualsArgs = {
    applicant_company_id: Scalars['ID'];
};


export type QueryApplicantCompanyLabelArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantCompanyLabelsArgs = {
    company_id?: InputMaybe<Scalars['ID']>;
    where?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsOrderByOrderByClause>>;
};


export type QueryApplicantCompanyModulesArgs = {
    applicant_company_id: Scalars['ID'];
};


export type QueryApplicantCompanyNoteArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantDocumentArgs = {
    id: Scalars['ID'];
};


export type QueryApplicantIndividualCompanyPositionArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualCompanyRelationArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualModulesArgs = {
    applicant_individual_id: Scalars['ID'];
};


export type QueryApplicantKycLevelArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualLabelArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualLabelsArgs = {
    applicant_id?: InputMaybe<Scalars['ID']>;
    where?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsOrderByOrderByClause>>;
};


export type QueryApplicantLinkedCompaniesArgs = {
    applicant_individual_id: Scalars['ID'];
};


export type QueryApplicant_ModuleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantIndividualNoteArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantRiskLevelArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStateReasonArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantStatusArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryAuthenticationLogsArgs = {
    page?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    query?: InputMaybe<QueryAuthenticationLogsStatic>;
    orderBy?: InputMaybe<Array<OrderBy>>;
};


export type QueryAuthenticationMemberLogsArgs = {
    member_id: Scalars['ID'];
    page?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<OrderBy>>;
};


export type QueryBankCorrespondentArgs = {
    id: Scalars['ID'];
};


export type QueryBusinessActivityArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionPriceListArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitActionTypeArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitPeriodArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTransferDirectionArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCommissionTemplateLimitTypeArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCompanyArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCompanyModulesArgs = {
    company_id: Scalars['ID'];
};


export type QueryCompanyModuleIbanProviderPasswordArgs = {
    id: Scalars['ID'];
};


export type QueryCompanyModuleProviderPasswordArgs = {
    id: Scalars['ID'];
};


export type QueryCountryArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryCurrencyArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryDashboardAccountsStatisticArgs = {
    created_at?: InputMaybe<DateTimeRange>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDashboardTicketsStatisticArgs = {
    created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDashboardTransfersStatisticArgs = {
    created_at?: InputMaybe<DateTimeRange>;
    company_id?: InputMaybe<Scalars['ID']>;
    payment_bank_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    payment_system_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDashboardUsersStatisticArgs = {
    company_id?: InputMaybe<Scalars['ID']>;
    created_at?: InputMaybe<DateTimeRange>;
    project_id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryDepartmentPositionArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailNotificationArgs = {
    company_id: Scalars['ID'];
    group_role_id: Scalars['ID'];
    group_type_id: Scalars['ID'];
    client_id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailSmtpArgs = {
    id: Scalars['ID'];
};


export type QueryEmailSmtpsArgs = {
    company_id: Scalars['ID'];
    orderBy?: InputMaybe<Array<QueryEmailSmtpsOrderByOrderByClause>>;
};


export type QueryEmailTemplateLayoutArgs = {
    company_id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplateArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryEmailTemplatesArgs = {
    filter?: InputMaybe<QueryEmailTemplatesFilterFilterConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    orderBy?: InputMaybe<Array<QueryEmailTemplatesOrderByOrderByClause>>;
};


export type QueryFeeDetailsArgs = {
    id: Scalars['ID'];
};


export type QueryFeeTypesArgs = {
    filter?: InputMaybe<QueryFeeTypesFilterFilterConditions>;
};


export type QueryFileArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryGroup_TypeArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryGroup_TypesArgs = {
    filter?: InputMaybe<QueryGroupTypesFilterFilterConditions>;
};


export type QueryKycTimelineArgs = {
    id: Scalars['ID'];
};


export type QueryKycTimelinesArgs = {
    applicant_id: Scalars['ID'];
    applicant_type: ApplicantType;
    company_id: Scalars['ID'];
    page?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<QueryKycTimelinesOrderByOrderByClause>>;
};


export type QueryMemberAccessLimitationArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryMemberArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryModuleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryModulesArgs = {
    where?: InputMaybe<QueryModulesWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryModulesOrderByOrderByClause>>;
};


export type QueryModulesWithKycArgs = {
    where?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryModulesWithKycOrderByOrderByClause>>;
};


export type QueryOperationTypesArgs = {
    filter?: InputMaybe<QueryOperationTypesFilterFilterConditions>;
};


export type QueryPaymentBankArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentProviderArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentProviderIbanArgs = {
    id: Scalars['ID'];
};


export type QueryPaymentStatusesArgs = {
    filter?: InputMaybe<QueryPaymentStatusesFilterFilterConditions>;
};


export type QueryPaymentSystemArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryPaymentArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryPermissionArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryPermissionsArgs = {
    where?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};


export type QueryPriceListFeesArgs = {
    filter?: InputMaybe<QueryPriceListFeesFilterFilterConditions>;
};


export type QueryProjectArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryProjectApiSettingsArgs = {
    project_id: Scalars['ID'];
};


export type QueryProjectApiSettingPasswordArgs = {
    id: Scalars['ID'];
};


export type QueryRegionArgs = {
    id: Scalars['ID'];
};


export type QueryRequisiteArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryRequisitesArgs = {
    filter?: InputMaybe<QueryRequisitesFilterFilterConditions>;
};


export type QueryDownloadRequisiteDetailsArgs = {
    account_id?: InputMaybe<Scalars['ID']>;
};


export type QuerySendRequisiteDetailsArgs = {
    account_id: Scalars['ID'];
    email: Scalars['String'];
};


export type QueryRoleArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketCommentArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryTicketArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryTransferIncomingArgs = {
    id: Scalars['ID'];
};


export type QueryTransferIncomingsStatisticArgs = {
    created_at?: InputMaybe<DateTimeRange>;
    company_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    account_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTransferOutgoingArgs = {
    id: Scalars['ID'];
};


export type QueryTransferOutgoingsStatisticArgs = {
    created_at?: InputMaybe<DateTimeRange>;
    company_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    account_id?: InputMaybe<Scalars['ID']>;
};


export type QueryTwoFactorAuthArgs = {
    id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicantAccountsArgs = {
    filter?: InputMaybe<QueryApplicantAccountsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantAccountsOrderByOrderByClause>>;
};


export type QueryApplicantRequisiteArgs = {
    account_number?: InputMaybe<Scalars['String']>;
};


export type QueryDownloadApplicantRequisiteDetailsArgs = {
    account_id?: InputMaybe<Scalars['ID']>;
};


export type QuerySendApplicantRequisiteDetailsArgs = {
    account_id: Scalars['ID'];
    email: Scalars['String'];
};


export type QueryLanguagesArgs = {
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryAccountLimitsArgs = {
    filter?: InputMaybe<QueryAccountLimitsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryAccountLimitsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryAccountReachedLimitsArgs = {
    filter?: InputMaybe<QueryAccountReachedLimitsFilterFilterConditions>;
    hasAccount?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
    where?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryAccountReachedLimitsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryAccountListArgs = {
    filter?: InputMaybe<QueryAccountListFilterFilterConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    orderBy?: InputMaybe<Array<QueryAccountListOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualsArgs = {
    filter?: InputMaybe<QueryApplicantIndividualsFilterFilterConditions>;
    group?: InputMaybe<Sort>;
    created_at?: InputMaybe<DateTimeRange>;
    company?: InputMaybe<Sort>;
    orderBy?: InputMaybe<Array<QueryApplicantIndividualsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompaniesArgs = {
    filter?: InputMaybe<QueryApplicantCompaniesFilterFilterConditions>;
    where?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
    hasGroupRole?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
    hasRiskLevel?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
    hasStateReason?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
    hasStatus?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
    hasBusinessType?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
    hasOwner?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
    hasKycLevel?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    group?: InputMaybe<Sort>;
    company?: InputMaybe<Sort>;
    orderBy?: InputMaybe<Array<QueryApplicantCompaniesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyBusinessTypeArgs = {
    where?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyLabelsAvailableArgs = {
    company_id?: InputMaybe<Scalars['ID']>;
    orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsAvailableOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyNotesArgs = {
    applicant_company_id?: InputMaybe<Scalars['ID']>;
    orderBy?: InputMaybe<Array<QueryApplicantCompanyNotesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantCompanyRiskLevelHistoryArgs = {
    filter?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>;
    applicant_company_id: Scalars['ID'];
    where?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentsArgs = {
    applicant_type: ApplicantType;
    filter?: InputMaybe<QueryApplicantDocumentsFilterFilterConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    update_at?: InputMaybe<DateTimeRange>;
    orderBy?: InputMaybe<Array<QueryApplicantDocumentsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentInternalNotesArgs = {
    applicant_document_id: Scalars['ID'];
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentTagsArgs = {
    filter?: InputMaybe<QueryApplicantDocumentTagsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantDocumentTagsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantDocumentTagCategoriesArgs = {
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualCompanyPositionsArgs = {
    filter?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualCompanyRelationsArgs = {
    filter?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantRiskLevelHistoryArgs = {
    applicant_id: Scalars['ID'];
    where?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantRiskLevelHistoryOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantKycLevelsArgs = {
    where?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantKycLevelsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualLabelsAvailableArgs = {
    applicant_id?: InputMaybe<Scalars['ID']>;
    orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsAvailableOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicant_ModulesArgs = {
    where?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantModulesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantIndividualNotesArgs = {
    applicant_individual_id?: InputMaybe<Scalars['ID']>;
    orderBy?: InputMaybe<Array<QueryApplicantIndividualNotesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantRiskLevelsArgs = {
    where?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantRiskLevelsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantStatesArgs = {
    where?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantStatesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantStateReasonsArgs = {
    where?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantStateReasonsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryApplicantStatusesArgs = {
    where?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryApplicantStatusesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryBankCorrespondentsArgs = {
    filter?: InputMaybe<QueryBankCorrespondentsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryBankCorrespondentsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryBusinessActivitiesArgs = {
    filter?: InputMaybe<QueryBusinessActivitiesFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryBusinessActivitiesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionPriceListsArgs = {
    filter?: InputMaybe<QueryCommissionPriceListsFilterFilterConditions>;
    paymentProviderName?: InputMaybe<Sort>;
    orderBy?: InputMaybe<Array<QueryCommissionPriceListsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplatesArgs = {
    filter?: InputMaybe<QueryCommissionTemplatesFilterFilterConditions>;
    paymentProviderName?: InputMaybe<Sort>;
    orderBy?: InputMaybe<Array<QueryCommissionTemplatesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplateLimitsArgs = {
    filter?: InputMaybe<QueryCommissionTemplateLimitsFilterStatic>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplateLimitActionTypesArgs = {
    where?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplateLimitPeriodsArgs = {
    where?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplateLimitTransferDirectionsArgs = {
    where?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCommissionTemplateLimitTypesArgs = {
    where?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
    orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTypesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCompaniesArgs = {
    filter?: InputMaybe<QueryCompaniesFilterFilterConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    country?: InputMaybe<Sort>;
    member_count?: InputMaybe<Sort>;
    orderBy?: InputMaybe<Array<QueryCompaniesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCountriesArgs = {
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryCurrenciesArgs = {
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryDepartmentsArgs = {
    filter?: InputMaybe<QueryDepartmentsFilterFilterConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    orderBy?: InputMaybe<Array<QueryDepartmentsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryDepartmentPositionsArgs = {
    company_id?: InputMaybe<Scalars['ID']>;
    filter?: InputMaybe<QueryDepartmentPositionsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryDepartmentPositionsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryEmailNotificationsArgs = {
    filter?: InputMaybe<QueryEmailNotificationsFilterFilterConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    orderBy?: InputMaybe<Array<QueryEmailNotificationsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryFilesArgs = {
    filter?: InputMaybe<QueryFilesFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryFilesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupTypeListArgs = {
    mode?: InputMaybe<GroupTypeMode>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupsArgs = {
    filter?: InputMaybe<QueryGroupsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryGroupsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryGroupListArgs = {
    filter?: InputMaybe<QueryGroupListFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryGroupListOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryMemberAccessLimitationsArgs = {
    member_id: Scalars['ID'];
    filter?: InputMaybe<QueryMemberAccessLimitationsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryMemberAccessLimitationsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryMembersArgs = {
    filter?: InputMaybe<QueryMembersFilterFilterConditions>;
    companyName?: InputMaybe<Sort>;
    group?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Array<QueryMembersOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentBanksArgs = {
    filter?: InputMaybe<QueryPaymentBanksFilterFilterConditions>;
    query?: InputMaybe<QueryPaymentBankCondition>;
    orderBy?: InputMaybe<Array<QueryPaymentBanksOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentProvidersArgs = {
    filter?: InputMaybe<QueryPaymentProvidersFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryPaymentProvidersOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentProviderIbansArgs = {
    filter?: InputMaybe<QueryPaymentProviderIbansFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryPaymentProviderIbansOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentSystemsArgs = {
    filter?: InputMaybe<QueryPaymentSystemsFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryPaymentSystemsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryPaymentsArgs = {
    filter?: InputMaybe<QueryPaymentsFilterFilterConditions>;
    AccountNumber?: InputMaybe<Sort>;
    created_at?: InputMaybe<DateTimeRange>;
    orderBy?: InputMaybe<Array<QueryPaymentsOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryProjectsArgs = {
    filter?: InputMaybe<QueryProjectsFilterFilterConditions>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryRegionsArgs = {
    filter?: InputMaybe<QueryRegionsFilterFilterConditions>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryRolesArgs = {
    groups_sort?: InputMaybe<Sort>;
    filter?: InputMaybe<QueryRolesFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryRolesOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryTicketsArgs = {
    filter?: InputMaybe<QueryTicketsFilterFilterConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    orderBy?: InputMaybe<Array<QueryTicketsOrderByRelationOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferIncomingsArgs = {
    filter?: InputMaybe<QueryTransferIncomingsFilterFilterConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferIncomingHistoryArgs = {
    transfer_id: Scalars['ID'];
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferOutgoingsArgs = {
    filter?: InputMaybe<QueryTransferOutgoingsFilterFilterConditions>;
    created_at?: InputMaybe<DateTimeRange>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryTransferOutgoingHistoryArgs = {
    transfer_id: Scalars['ID'];
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryTwoFactorsAuthArgs = {
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
    filter?: InputMaybe<QueryUsersFilterFilterConditions>;
    orderBy?: InputMaybe<Array<QueryUsersOrderByOrderByClause>>;
    first?: InputMaybe<Scalars['Int']>;
    page?: InputMaybe<Scalars['Int']>;
};

export type Languages = {
    __typename?: 'Languages';
    id: Scalars['ID'];
    name: Scalars['String'];
    iso: Scalars['String'];
};

export type AccountLimit = {
    __typename?: 'AccountLimit';
    id: Scalars['ID'];
    account_id?: Maybe<Scalars['ID']>;
    commission_template_limit_transfer_direction_id?: Maybe<Scalars['ID']>;
    amount?: Maybe<Scalars['Decimal']>;
    currency_id?: Maybe<Scalars['ID']>;
    currency?: Maybe<Currencies>;
    commission_template_limit_period_id?: Maybe<Scalars['ID']>;
    commission_template_limit_action_type_id?: Maybe<Scalars['ID']>;
    period_count?: Maybe<Scalars['Int']>;
    commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
    commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
    commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
    commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
    account?: Maybe<Account>;
};

export type Currencies = {
    __typename?: 'Currencies';
    id: Scalars['ID'];
    name: Scalars['String'];
    code: Scalars['String'];
    minor_unit?: Maybe<Scalars['Int']>;
};

export type CommissionTemplateLimitType = {
    __typename?: 'CommissionTemplateLimitType';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type CommissionTemplateLimitTransferDirection = {
    __typename?: 'CommissionTemplateLimitTransferDirection';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type CommissionTemplateLimitPeriod = {
    __typename?: 'CommissionTemplateLimitPeriod';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type CommissionTemplateLimitActionType = {
    __typename?: 'CommissionTemplateLimitActionType';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type Account = {
    __typename?: 'Account';
    id: Scalars['ID'];
    currency?: Maybe<Currencies>;
    owner?: Maybe<ApplicantIndividual>;
    account_number?: Maybe<Scalars['String']>;
    account_type?: Maybe<AccountType>;
    payment_provider?: Maybe<PaymentProvider>;
    iban_provider?: Maybe<PaymentProviderIban>;
    payment_system?: Maybe<PaymentSystem>;
    payment_bank?: Maybe<PaymentBank>;
    commission_template?: Maybe<CommissionTemplate>;
    group?: Maybe<GroupRole>;
    group_type?: Maybe<GroupType>;
    client?: Maybe<Client>;
    account_state?: Maybe<AccountState>;
    company?: Maybe<Company>;
    member?: Maybe<Members>;
    client_accounts: Array<ClientAccountsDetails>;
    account_name: Scalars['String'];
    is_primary?: Maybe<Scalars['Boolean']>;
    min_limit_balance?: Maybe<Scalars['Decimal']>;
    max_limit_balance?: Maybe<Scalars['Decimal']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
    activated_at?: Maybe<Scalars['DateTimeUtc']>;
    last_charge_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type ApplicantIndividual = {
    __typename?: 'ApplicantIndividual';
    id: Scalars['ID'];
    first_name?: Maybe<Scalars['String']>;
    last_name?: Maybe<Scalars['String']>;
    middle_name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['EMAIL']>;
    url?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    email_verification?: Maybe<ApplicantVerificationStatus>;
    phone_verification?: Maybe<ApplicantVerificationStatus>;
    country?: Maybe<Country>;
    language?: Maybe<Languages>;
    citizenship_country?: Maybe<Country>;
    state?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
    nationality?: Maybe<Scalars['String']>;
    birth_country?: Maybe<Country>;
    birth_state?: Maybe<Scalars['String']>;
    birth_city?: Maybe<Scalars['String']>;
    birth_at?: Maybe<Scalars['Date']>;
    sex?: Maybe<Sex>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
    profile_additional_fields?: Maybe<Scalars['JSON']>;
    personal_additional_fields?: Maybe<Scalars['JSON']>;
    contacts_additional_fields?: Maybe<Scalars['JSON']>;
    fullname?: Maybe<Scalars['String']>;
    last_screened_at?: Maybe<Scalars['DateTimeUtc']>;
    address_additional_fields?: Maybe<Scalars['JSON']>;
    status?: Maybe<ApplicantStatus>;
    applicant_state?: Maybe<ApplicantState>;
    state_reason?: Maybe<ApplicantStateReason>;
    risk_level?: Maybe<ApplicantRiskLevel>;
    manager?: Maybe<Members>;
    labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
    company?: Maybe<Company>;
    notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
    modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
    applicant_companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
    group?: Maybe<GroupRole>;
    photo?: Maybe<Files>;
    project?: Maybe<Project>;
    two_factor_auth?: Maybe<TwoFactorAuthSettings>;
    security_pin?: Maybe<Scalars['String']>;
    google2fa_secret?: Maybe<Scalars['String']>;
    backup_codes?: Maybe<Scalars['JSON']>;
    ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
    kyc_level?: Maybe<ApplicantKycLevel>;
    banking_access?: Maybe<Array<Maybe<ApplicantBankingAccess>>>;
};

export type ApplicantVerificationStatus = {
    __typename?: 'ApplicantVerificationStatus';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type Country = {
    __typename?: 'Country';
    id: Scalars['ID'];
    name: Scalars['String'];
    iso: Scalars['String'];
};

export enum Sex {
    Male = 'Male',
    Female = 'Female'
}

export type ApplicantStatus = {
    __typename?: 'ApplicantStatus';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type ApplicantState = {
    __typename?: 'ApplicantState';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type ApplicantStateReason = {
    __typename?: 'ApplicantStateReason';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type ApplicantRiskLevel = {
    __typename?: 'ApplicantRiskLevel';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type Members = {
    __typename?: 'Members';
    id: Scalars['ID'];
    first_name?: Maybe<Scalars['String']>;
    last_name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['EMAIL']>;
    sex?: Maybe<Sex>;
    member_status?: Maybe<MemberStatus>;
    last_login_at?: Maybe<Scalars['DateTimeUtc']>;
    company?: Maybe<Company>;
    country?: Maybe<Country>;
    language?: Maybe<Languages>;
    group?: Maybe<GroupRole>;
    position?: Maybe<DepartmentPosition>;
    department?: Maybe<Department>;
    two_factor_auth_setting_id?: Maybe<Scalars['ID']>;
    two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
    additional_fields?: Maybe<Scalars['JSON']>;
    additional_info_fields?: Maybe<Scalars['JSON']>;
    fullname?: Maybe<Scalars['String']>;
    access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
    is_show_owner_applicants?: Maybe<Scalars['Boolean']>;
    security_pin?: Maybe<Scalars['String']>;
    google2fa_secret?: Maybe<Scalars['String']>;
    backup_codes?: Maybe<Scalars['JSON']>;
    is_sign_transaction?: Maybe<Scalars['Boolean']>;
    ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
    email_verification?: Maybe<EmailVerification>;
    photo?: Maybe<Files>;
    job_title?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type MemberStatus = {
    __typename?: 'MemberStatus';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type Company = {
    __typename?: 'Company';
    id: Scalars['ID'];
    name: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    email: Scalars['EMAIL'];
    company_number?: Maybe<Scalars['String']>;
    company_modules?: Maybe<Array<Maybe<CompanyModule>>>;
    contact_name?: Maybe<Scalars['String']>;
    country?: Maybe<Country>;
    zip?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    members?: Maybe<Array<Maybe<Members>>>;
    members_count?: Maybe<Scalars['Int']>;
    projects_count?: Maybe<Scalars['Int']>;
    projects?: Maybe<Array<Maybe<Project>>>;
    departments?: Maybe<Array<Maybe<Department>>>;
    positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
    additional_fields_info?: Maybe<Scalars['JSON']>;
    phone?: Maybe<Scalars['String']>;
    reg_address?: Maybe<Scalars['String']>;
    tax_id?: Maybe<Scalars['String']>;
    incorporate_date?: Maybe<Scalars['DateTimeUtc']>;
    employees?: Maybe<Employee>;
    type_of_industry?: Maybe<TypeOfIndustry>;
    license_number?: Maybe<Scalars['String']>;
    exp_date?: Maybe<Scalars['DateTimeUtc']>;
    state?: Maybe<State>;
    state_reason?: Maybe<StateReason>;
    reg_number?: Maybe<Scalars['String']>;
    entity_type?: Maybe<Scalars['String']>;
    additional_fields_basic?: Maybe<Scalars['JSON']>;
    additional_fields_settings?: Maybe<Scalars['JSON']>;
    additional_fields_data?: Maybe<Scalars['JSON']>;
    logo?: Maybe<Files>;
    vv_token?: Maybe<Scalars['String']>;
    member_verify_url?: Maybe<Scalars['String']>;
    backoffice_login_url?: Maybe<Scalars['String']>;
    backoffice_forgot_password_url?: Maybe<Scalars['String']>;
    backoffice_support_url?: Maybe<Scalars['String']>;
    backoffice_support_email?: Maybe<Scalars['EMAIL']>;
    created_at: Scalars['DateTimeUtc'];
    updated_at: Scalars['DateTimeUtc'];
};

export type CompanyModule = {
    __typename?: 'CompanyModule';
    id: Scalars['ID'];
    module?: Maybe<Module>;
    payment_providers?: Maybe<Array<Maybe<CompanyModulePaymentProvider>>>;
    iban_providers?: Maybe<Array<Maybe<CompanyModuleIbanProvider>>>;
    is_active: Scalars['Boolean'];
};

export type Module = {
    __typename?: 'Module';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type CompanyModulePaymentProvider = {
    __typename?: 'CompanyModulePaymentProvider';
    id: Scalars['ID'];
    company_module_id: Scalars['ID'];
    payment_provider: PaymentProvider;
    is_active: Scalars['Boolean'];
};

export type PaymentProvider = {
    __typename?: 'PaymentProvider';
    id: Scalars['ID'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    logo?: Maybe<Files>;
    is_active?: Maybe<Scalars['Boolean']>;
    payment_systems?: Maybe<Array<Maybe<PaymentSystem>>>;
    commission_price_list?: Maybe<CommissionPriceList>;
    company?: Maybe<Company>;
};

export type Files = {
    __typename?: 'Files';
    id: Scalars['ID'];
    file_name: Scalars['String'];
    mime_type: Scalars['String'];
    size: Scalars['Int'];
    entity_type: FileEntityTypeEnum;
    author_id: Scalars['Int'];
    storage_path: Scalars['String'];
    storage_name: Scalars['String'];
    link: Scalars['String'];
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export enum FileEntityTypeEnum {
    Member = 'MEMBER',
    Company = 'COMPANY',
    Document = 'DOCUMENT',
    ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
    ApplicantCompany = 'APPLICANT_COMPANY',
    Applicant = 'APPLICANT',
    Project = 'PROJECT',
    File = 'FILE'
}

export type PaymentSystem = {
    __typename?: 'PaymentSystem';
    id: Scalars['ID'];
    name: Scalars['String'];
    is_active?: Maybe<Scalars['Boolean']>;
    regions?: Maybe<Array<Maybe<Region>>>;
    company?: Maybe<Company>;
    currencies?: Maybe<Array<Maybe<Currencies>>>;
    providers?: Maybe<PaymentProvider>;
    banks?: Maybe<Array<Maybe<PaymentBank>>>;
    bank_correspondent?: Maybe<BankCorrespondent>;
    operations?: Maybe<Array<Maybe<OperationType>>>;
    description?: Maybe<Scalars['String']>;
    logo?: Maybe<Files>;
};

export type Region = {
    __typename?: 'Region';
    id: Scalars['ID'];
    name: Scalars['String'];
    countries?: Maybe<Array<Maybe<Country>>>;
    company?: Maybe<Company>;
};

export type PaymentBank = {
    __typename?: 'PaymentBank';
    id: Scalars['ID'];
    name: Scalars['String'];
    address?: Maybe<Scalars['String']>;
    bank_code?: Maybe<Scalars['String']>;
    payment_system_code?: Maybe<Scalars['String']>;
    country?: Maybe<Country>;
    bank_correspondent?: Maybe<BankCorrespondent>;
    payment_provider?: Maybe<PaymentProvider>;
    payment_system?: Maybe<PaymentSystem>;
    is_active?: Maybe<Scalars['Boolean']>;
};

export type BankCorrespondent = {
    __typename?: 'BankCorrespondent';
    id: Scalars['ID'];
    name: Scalars['String'];
    address: Scalars['String'];
    bank_code: Scalars['String'];
    bank_account: Scalars['String'];
    currencies?: Maybe<Array<Maybe<Currencies>>>;
    regions?: Maybe<Array<Maybe<Region>>>;
    is_active?: Maybe<Scalars['Boolean']>;
};

export type OperationType = {
    __typename?: 'OperationType';
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
};

export type CommissionPriceList = {
    __typename?: 'CommissionPriceList';
    id: Scalars['ID'];
    name: Scalars['String'];
    provider?: Maybe<PaymentProvider>;
    owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
    account?: Maybe<Account>;
    payment_system?: Maybe<PaymentSystem>;
    commission_template?: Maybe<CommissionTemplate>;
    fees?: Maybe<Array<Maybe<PriceListFee>>>;
    region?: Maybe<Region>;
    company?: Maybe<Company>;
};

export type CommissionTemplate = {
    __typename?: 'CommissionTemplate';
    id: Scalars['ID'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    country_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
    currency_id?: Maybe<Array<Maybe<Scalars['ID']>>>;
    payment_provider?: Maybe<PaymentProvider>;
    business_activity?: Maybe<Array<Maybe<BusinessActivity>>>;
    owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
    account?: Maybe<Account>;
    company?: Maybe<Company>;
    regions?: Maybe<Array<Maybe<Region>>>;
    currencies?: Maybe<Array<Maybe<Currencies>>>;
    commission_template_limits?: Maybe<Array<Maybe<CommissionTemplateLimit>>>;
};

export type BusinessActivity = {
    __typename?: 'BusinessActivity';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type CommissionTemplateLimit = {
    __typename?: 'CommissionTemplateLimit';
    id: Scalars['ID'];
    amount: Scalars['Decimal'];
    currency: Currencies;
    period_count?: Maybe<Scalars['Int']>;
    commission_template_limit_type: CommissionTemplateLimitType;
    commission_template_limit_transfer_direction: CommissionTemplateLimitTransferDirection;
    commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
    commission_template_limit_action_type: CommissionTemplateLimitActionType;
    commission_template: CommissionTemplate;
    payment_system: PaymentSystem;
    region: Region;
};

export type PriceListFee = {
    __typename?: 'PriceListFee';
    id: Scalars['ID'];
    name: Scalars['String'];
    fee_type?: Maybe<FeeType>;
    operation_type?: Maybe<OperationType>;
    period?: Maybe<FeePeriod>;
    fees?: Maybe<Array<Maybe<PriceListFeeCurrency>>>;
    price_list_id?: Maybe<Scalars['ID']>;
    fee_ranges?: Maybe<Scalars['JSON']>;
    scheduled?: Maybe<PriceListFeeScheduled>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type FeeType = {
    __typename?: 'FeeType';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type FeePeriod = {
    __typename?: 'FeePeriod';
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
};

export type PriceListFeeCurrency = {
    __typename?: 'PriceListFeeCurrency';
    id: Scalars['ID'];
    currency_id: Scalars['ID'];
    price_list_fee_id: Scalars['ID'];
    fee?: Maybe<Array<Maybe<FeeItem>>>;
};

export type FeeItem = {
    __typename?: 'FeeItem';
    mode: Scalars['String'];
    fee?: Maybe<Scalars['Int']>;
    amount_from?: Maybe<Scalars['Int']>;
    amount_to?: Maybe<Scalars['Int']>;
    percent?: Maybe<Scalars['Int']>;
};

export type PriceListFeeScheduled = {
    __typename?: 'PriceListFeeScheduled';
    starting_date?: Maybe<Scalars['DateTimeUtc']>;
    end_date?: Maybe<Scalars['DateTimeUtc']>;
    recurrent_interval?: Maybe<Scalars['Int']>;
    starting_date_id?: Maybe<Scalars['ID']>;
    end_date_id?: Maybe<Scalars['ID']>;
};

export type CompanyModuleIbanProvider = {
    __typename?: 'CompanyModuleIbanProvider';
    id: Scalars['ID'];
    company_module_id: Scalars['ID'];
    payment_provider_iban: PaymentProviderIban;
    is_active: Scalars['Boolean'];
};

export type PaymentProviderIban = {
    __typename?: 'PaymentProviderIban';
    id: Scalars['ID'];
    name: Scalars['String'];
    company?: Maybe<Company>;
    currency?: Maybe<Currencies>;
    is_active?: Maybe<Scalars['Boolean']>;
};

export type Project = {
    __typename?: 'Project';
    id: Scalars['ID'];
    name: Scalars['String'];
    url?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    support_email?: Maybe<Scalars['String']>;
    login_url?: Maybe<Scalars['String']>;
    sms_sender_name?: Maybe<Scalars['String']>;
    client_url?: Maybe<Scalars['String']>;
    forgot_password_url?: Maybe<Scalars['String']>;
    additional_fields_basic?: Maybe<Scalars['JSON']>;
    additional_fields_settings?: Maybe<Scalars['JSON']>;
    project_settings?: Maybe<Array<Maybe<ProjectSettings>>>;
    project_api_settings?: Maybe<Array<Maybe<ProjectApiSetting>>>;
    module?: Maybe<Module>;
    company?: Maybe<Company>;
    avatar?: Maybe<Files>;
    state?: Maybe<State>;
    created_at: Scalars['DateTimeUtc'];
    updated_at: Scalars['DateTimeUtc'];
};

export type ProjectSettings = {
    __typename?: 'ProjectSettings';
    group_type?: Maybe<GroupType>;
    group_role?: Maybe<GroupRole>;
    payment_provider?: Maybe<PaymentProvider>;
    iban_provider?: Maybe<PaymentProviderIban>;
    commission_template?: Maybe<CommissionTemplate>;
    applicant_type: ApplicantType;
};

export type GroupType = {
    __typename?: 'GroupType';
    id: Scalars['ID'];
    name: GroupsEntities;
};

export enum GroupsEntities {
    Member = 'Member',
    Company = 'Company',
    Individual = 'Individual'
}

export type GroupRole = {
    __typename?: 'GroupRole';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    group_type_id?: Maybe<Scalars['ID']>;
    role_id?: Maybe<Scalars['ID']>;
    module_id?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    group_type?: Maybe<GroupType>;
    role?: Maybe<Role>;
    providers?: Maybe<Array<Maybe<GroupRoleProvider>>>;
    company?: Maybe<Company>;
    module?: Maybe<Module>;
};

export type Role = {
    __typename?: 'Role';
    id: Scalars['ID'];
    name: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    permissions?: Maybe<Array<Maybe<Permissions>>>;
    permission_category_all_member?: Maybe<Array<Maybe<PermissionCategory>>>;
    permissions_tree?: Maybe<Scalars['JSON']>;
    group_type?: Maybe<GroupType>;
    company?: Maybe<Company>;
    groups?: Maybe<Array<Maybe<GroupRole>>>;
    groups_count?: Maybe<Scalars['Int']>;
    is_all_companies?: Maybe<Scalars['Boolean']>;
};

export type Permissions = {
    __typename?: 'Permissions';
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    display_name?: Maybe<Scalars['String']>;
    guard_name?: Maybe<Scalars['String']>;
    type?: Maybe<Scalars['String']>;
    all?: Maybe<Scalars['JSON']>;
};

export type PermissionCategory = {
    __typename?: 'PermissionCategory';
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    permissionList?: Maybe<Array<Maybe<PermissionList>>>;
};


export type PermissionCategoryPermissionListArgs = {
    permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
    column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
    OR?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
    HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
};

export enum PermissionCategoryPermissionListPermissionTypeColumn {
    Type = 'TYPE'
}

export enum SqlOperator {
    Eq = 'EQ',
    Neq = 'NEQ',
    Gt = 'GT',
    Gte = 'GTE',
    Lt = 'LT',
    Lte = 'LTE',
    Like = 'LIKE',
    Ilike = 'ILIKE',
    NotLike = 'NOT_LIKE',
    In = 'IN',
    NotIn = 'NOT_IN',
    Between = 'BETWEEN',
    NotBetween = 'NOT_BETWEEN',
    IsNull = 'IS_NULL',
    IsNotNull = 'IS_NOT_NULL'
}

export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

export type PermissionList = {
    __typename?: 'PermissionList';
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    type?: Maybe<PermissionListType>;
    separator?: Maybe<PermissionSeparatorType>;
    permissions?: Maybe<Array<Maybe<Permissions>>>;
};

export enum PermissionListType {
    Member = 'Member',
    Individual = 'Individual'
}

export enum PermissionSeparatorType {
    Private = 'Private',
    Business = 'Business'
}

export type GroupRoleProvider = {
    __typename?: 'GroupRoleProvider';
    id: Scalars['ID'];
    group_role_id?: Maybe<Scalars['ID']>;
    payment_provider?: Maybe<PaymentProvider>;
    commission_template?: Maybe<CommissionTemplate>;
    is_default?: Maybe<Scalars['Boolean']>;
};

export enum ApplicantType {
    ApplicantIndividual = 'ApplicantIndividual',
    ApplicantCompany = 'ApplicantCompany'
}

export type ProjectApiSetting = {
    __typename?: 'ProjectApiSetting';
    id: Scalars['ID'];
    project: Project;
    wallet?: Maybe<Scalars['String']>;
    api_key?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    provider?: Maybe<ProviderType>;
};

export type ProviderType = PaymentProvider | PaymentProviderIban;

export type State = {
    __typename?: 'State';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type Department = {
    __typename?: 'Department';
    id: Scalars['ID'];
    name: Scalars['String'];
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    company?: Maybe<Company>;
    positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
};

export type DepartmentPosition = {
    __typename?: 'DepartmentPosition';
    id: Scalars['ID'];
    name: Scalars['String'];
    is_active?: Maybe<Scalars['Boolean']>;
    company?: Maybe<Company>;
    department?: Maybe<Array<Maybe<Department>>>;
};

export type Employee = {
    __typename?: 'Employee';
    id: Scalars['ID'];
    employees_number: Scalars['String'];
};

export type TypeOfIndustry = {
    __typename?: 'TypeOfIndustry';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type StateReason = {
    __typename?: 'StateReason';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type TwoFactorAuthSettings = {
    __typename?: 'TwoFactorAuthSettings';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type MemberAccessLimitation = {
    __typename?: 'MemberAccessLimitation';
    id: Scalars['ID'];
    company?: Maybe<Company>;
    member?: Maybe<Members>;
    module?: Maybe<Module>;
    group?: Maybe<GroupType>;
    group_roles?: Maybe<Array<Maybe<GroupRole>>>;
    project?: Maybe<Project>;
    provider?: Maybe<PaymentProvider>;
    see_own_applicants?: Maybe<Scalars['Boolean']>;
};

export type ClientIpAddress = {
    __typename?: 'ClientIpAddress';
    id: Scalars['ID'];
    ip_address?: Maybe<Scalars['String']>;
    client_type?: Maybe<Scalars['String']>;
    client_id?: Maybe<Scalars['ID']>;
};

export enum EmailVerification {
    NotVerified = 'NOT_VERIFIED',
    Requested = 'REQUESTED',
    Verified = 'VERIFIED'
}

export type ApplicantIndividualLabel = {
    __typename?: 'ApplicantIndividualLabel';
    id: Scalars['ID'];
    name: Scalars['String'];
    hex_color_code: Scalars['String'];
    is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantIndividualNotes = {
    __typename?: 'ApplicantIndividualNotes';
    id: Scalars['ID'];
    note: Scalars['String'];
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    author?: Maybe<Members>;
    applicant?: Maybe<ApplicantIndividual>;
};

export type ApplicantIndividualModules = {
    __typename?: 'ApplicantIndividualModules';
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantCompany = {
    __typename?: 'ApplicantCompany';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['EMAIL']>;
    url?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    email_verification?: Maybe<ApplicantVerificationStatus>;
    phone_verification?: Maybe<ApplicantVerificationStatus>;
    country?: Maybe<Country>;
    language?: Maybe<Languages>;
    state?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    address2?: Maybe<Scalars['String']>;
    office_address?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
    reg_at?: Maybe<Scalars['Date']>;
    expires_at?: Maybe<Scalars['Date']>;
    tax?: Maybe<Scalars['String']>;
    reg_number?: Maybe<Scalars['String']>;
    license_number?: Maybe<Scalars['String']>;
    company_type?: Maybe<Scalars['String']>;
    company_info_additional_fields?: Maybe<Scalars['JSON']>;
    contacts_additional_fields?: Maybe<Scalars['JSON']>;
    profile_additional_fields?: Maybe<Scalars['JSON']>;
    incorporate_date?: Maybe<Scalars['DateTimeUtc']>;
    basic_info_additional_field?: Maybe<Scalars['JSON']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    contact_email?: Maybe<Scalars['EMAIL']>;
    contact_phone?: Maybe<Scalars['String']>;
    business_type?: Maybe<ApplicantCompanyBusinessType>;
    status?: Maybe<ApplicantStatus>;
    applicant_state?: Maybe<ApplicantState>;
    state_reason?: Maybe<ApplicantStateReason>;
    risk_level?: Maybe<ApplicantRiskLevel>;
    kyc_level?: Maybe<ApplicantRiskLevel>;
    manager?: Maybe<Members>;
    owner?: Maybe<ApplicantIndividual>;
    labels?: Maybe<Array<Maybe<ApplicantCompanyLabel>>>;
    notes?: Maybe<Array<Maybe<ApplicantCompanyNotes>>>;
    modules?: Maybe<Array<Maybe<ApplicantCompanyModules>>>;
    company_position?: Maybe<ApplicantIndividualCompany>;
    owner_relation?: Maybe<ApplicantIndividualCompany>;
    owner_position?: Maybe<ApplicantIndividualCompany>;
    company?: Maybe<Company>;
    group?: Maybe<GroupRole>;
    photo?: Maybe<Files>;
    project?: Maybe<Project>;
};

export type ApplicantCompanyBusinessType = {
    __typename?: 'ApplicantCompanyBusinessType';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type ApplicantCompanyLabel = {
    __typename?: 'ApplicantCompanyLabel';
    id: Scalars['ID'];
    name: Scalars['String'];
    hex_color_code: Scalars['String'];
    is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantCompanyNotes = {
    __typename?: 'ApplicantCompanyNotes';
    id: Scalars['ID'];
    note: Scalars['String'];
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    author?: Maybe<Members>;
    applicant?: Maybe<ApplicantCompany>;
};

export type ApplicantCompanyModules = {
    __typename?: 'ApplicantCompanyModules';
    id?: Maybe<Scalars['ID']>;
    name?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
};

export type ApplicantIndividualCompany = {
    __typename?: 'ApplicantIndividualCompany';
    applicant_id: Scalars['ID'];
    applicant_type: Scalars['String'];
    applicant_company_id: Scalars['ID'];
    applicant_company?: Maybe<ApplicantCompany>;
    applicant_individual_company_relation_id: Scalars['ID'];
    applicant_individual_company_position_id: Scalars['ID'];
    relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
    position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
    percentage_owned?: Maybe<Scalars['Float']>;
    client?: Maybe<Client>;
};

export type ApplicantIndividualCompanyRelation = {
    __typename?: 'ApplicantIndividualCompanyRelation';
    id: Scalars['ID'];
    name: Scalars['String'];
    company?: Maybe<Company>;
};

export type ApplicantIndividualCompanyPosition = {
    __typename?: 'ApplicantIndividualCompanyPosition';
    id: Scalars['ID'];
    name: Scalars['String'];
    company?: Maybe<Company>;
};

export type Client = ApplicantIndividual | ApplicantCompany;

export type ApplicantKycLevel = {
    __typename?: 'ApplicantKycLevel';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type ApplicantBankingAccess = {
    __typename?: 'ApplicantBankingAccess';
    id: Scalars['ID'];
    applicant_individual?: Maybe<ApplicantIndividual>;
    applicant_company?: Maybe<ApplicantCompany>;
    member?: Maybe<Members>;
    contact_administrator: Scalars['Boolean'];
    daily_limit: Scalars['Decimal'];
    monthly_limit: Scalars['Decimal'];
    operation_limit: Scalars['Decimal'];
    used_daily_limit: Scalars['Decimal'];
    used_monthly_limit: Scalars['Decimal'];
    role?: Maybe<Role>;
    grant_access?: Maybe<Scalars['Boolean']>;
    create_payments?: Maybe<Scalars['Boolean']>;
    sign_payments?: Maybe<Scalars['Boolean']>;
};

export enum AccountType {
    Private = 'Private',
    Business = 'Business'
}

export type AccountState = {
    __typename?: 'AccountState';
    id: Scalars['ID'];
    name: Scalars['String'];
    active: Scalars['Boolean'];
};

export type ClientAccountsDetails = {
    __typename?: 'ClientAccountsDetails';
    id: Scalars['ID'];
    current_balance: Scalars['Decimal'];
    reserved_balance: Scalars['Decimal'];
    available_balance: Scalars['Decimal'];
    currency: Currencies;
    min_limit_balance?: Maybe<Scalars['Decimal']>;
    max_limit_balance?: Maybe<Scalars['Decimal']>;
};

export type AccountReachedLimit = {
    __typename?: 'AccountReachedLimit';
    id: Scalars['ID'];
    account_id: Scalars['ID'];
    account?: Maybe<Account>;
    group_type: Scalars['String'];
    client_name: Scalars['String'];
    client_type: Scalars['String'];
    transfer_direction: Scalars['String'];
    limit_type: Scalars['String'];
    limit_value: Scalars['Int'];
    limit_currency: Scalars['String'];
    period: Scalars['Int'];
    amount: Scalars['Decimal'];
};

export type DateTimeRange = {
    from: Scalars['DateTimeUtc'];
    to: Scalars['DateTimeUtc'];
};

export type AccountStatement = {
    __typename?: 'AccountStatement';
    account_number?: Maybe<Scalars['String']>;
    account_currency?: Maybe<Scalars['String']>;
    date_from: Scalars['DateTimeUtc'];
    opening_balance?: Maybe<Scalars['Float']>;
    opening_balance_date?: Maybe<Scalars['DateTimeUtc']>;
    closing_balance?: Maybe<Scalars['Float']>;
    closing_balance_date?: Maybe<Scalars['DateTimeUtc']>;
    debit_turnover?: Maybe<Scalars['Float']>;
    credit_turnover?: Maybe<Scalars['Float']>;
    transactions?: Maybe<Array<Maybe<AccountStatementTransaction>>>;
};

export type AccountStatementTransaction = {
    __typename?: 'AccountStatementTransaction';
    transaction_id: Scalars['ID'];
    created_at: Scalars['DateTimeUtc'];
    execution_at?: Maybe<Scalars['DateTimeUtc']>;
    sender_recipient?: Maybe<Scalars['String']>;
    reason?: Maybe<Scalars['String']>;
    amount: Scalars['Float'];
    account_number?: Maybe<Scalars['String']>;
    account_client?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    account_balance?: Maybe<Scalars['Float']>;
};

export type RawFile = {
    __typename?: 'RawFile';
    base64: Scalars['String'];
};

export type QueryAccountStatesOrderByOrderByClause = {
    column: QueryAccountStatesOrderByColumn;
    order: SortOrder;
};

export enum QueryAccountStatesOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export enum SortOrder {
    Asc = 'ASC',
    Desc = 'DESC'
}

export type AccountClient = {
    __typename?: 'AccountClient';
    id: Scalars['ID'];
    client: Client;
};

export type QueryActiveSessionsStatic = {
    company?: InputMaybe<Scalars['String']>;
    provider?: InputMaybe<Scalars['String']>;
    group?: InputMaybe<Scalars['String']>;
    created_at?: InputMaybe<Scalars['Date']>;
};

export type ActiveSessions = {
    __typename?: 'ActiveSessions';
    data?: Maybe<Array<ActiveSession>>;
    paginatorInfo?: Maybe<PaginatorInfo>;
};

export type ActiveSession = {
    __typename?: 'ActiveSession';
    id: Scalars['String'];
    company: Scalars['String'];
    provider: Scalars['String'];
    domain: Scalars['String'];
    ip?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    platform?: Maybe<Scalars['String']>;
    browser?: Maybe<Scalars['String']>;
    browser_version?: Maybe<Scalars['String']>;
    device_type?: Maybe<Scalars['String']>;
    model?: Maybe<Scalars['String']>;
    trusted?: Maybe<Scalars['Boolean']>;
    created_at: Scalars['DateTimeUtc'];
};

export type PaginatorInfo = {
    __typename?: 'PaginatorInfo';
    count: Scalars['Int'];
    currentPage: Scalars['Int'];
    firstItem?: Maybe<Scalars['Int']>;
    hasMorePages: Scalars['Boolean'];
    lastItem?: Maybe<Scalars['Int']>;
    lastPage: Scalars['Int'];
    perPage: Scalars['Int'];
    total: Scalars['Int'];
};

export type QueryActivityLogsStatic = {
    company?: InputMaybe<Scalars['String']>;
    member?: InputMaybe<Scalars['String']>;
    group?: InputMaybe<Scalars['String']>;
    domain?: InputMaybe<Scalars['String']>;
    created_at?: InputMaybe<Scalars['Date']>;
};

export type OrderBy = {
    column: Column;
    order: Order;
};

export enum Column {
    ExpiredAt = 'EXPIRED_AT',
    CreatedAt = 'CREATED_AT',
    Id = 'ID'
}

export enum Order {
    Asc = 'ASC',
    Desc = 'DESC'
}

export type ActivityLogs = {
    __typename?: 'ActivityLogs';
    data?: Maybe<Array<ActivityLog>>;
    paginatorInfo?: Maybe<PaginatorInfo>;
};

export type ActivityLog = {
    __typename?: 'ActivityLog';
    id: Scalars['String'];
    company: Scalars['String'];
    member: Scalars['String'];
    group: Scalars['String'];
    domain: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    changes?: Maybe<Scalars['String']>;
    created_at: Scalars['DateTimeUtc'];
};

export type QueryOwnersOrderByOrderByClause = {
    column: QueryOwnersOrderByColumn;
    order: SortOrder;
};

export enum QueryOwnersOrderByColumn {
    Id = 'ID',
    Email = 'EMAIL',
    CreatedAt = 'CREATED_AT',
    Fullname = 'FULLNAME'
}

export type QueryGrantedBankingAccessFilterFilterConditions = {
    column?: InputMaybe<QueryGrantedBankingAccessFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
};

export enum QueryGrantedBankingAccessFilterStatic {
    MemberId = 'MEMBER_ID',
    GrantAccess = 'GRANT_ACCESS'
}

export type QueryGrantedBankingAccessOrderByOrderByClause = {
    column: QueryGrantedBankingAccessOrderByColumn;
    order: SortOrder;
};

export enum QueryGrantedBankingAccessOrderByColumn {
    Id = 'ID',
    ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
    ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
    MemberId = 'MEMBER_ID'
}

export type ApplicantBankingAccesses = {
    __typename?: 'ApplicantBankingAccesses';
    data?: Maybe<Array<ApplicantBankingAccess>>;
    paginatorInfo?: Maybe<PaginatorInfo>;
};

export type QueryApplicantBankingAccessesFilterFilterConditions = {
    column?: InputMaybe<QueryApplicantBankingAccessesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
};

export enum QueryApplicantBankingAccessesFilterStatic {
    MemberId = 'MEMBER_ID',
    GrantAccess = 'GRANT_ACCESS'
}

export type QueryApplicantBankingAccessesOrderByOrderByClause = {
    column: QueryApplicantBankingAccessesOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantBankingAccessesOrderByColumn {
    Id = 'ID',
    ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
    ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
    MemberId = 'MEMBER_ID'
}

export type QueryGetMatchedUsersFilterFilterConditions = {
    column?: InputMaybe<QueryGetMatchedUsersFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
};

export enum QueryGetMatchedUsersFilterStatic {
    ApplicantType = 'APPLICANT_TYPE'
}

export type QueryApplicantCompanyLabelsWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantCompanyLabelsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditionsRelation>;
};

export enum QueryApplicantCompanyLabelsWhereColumn {
    Name = 'NAME'
}

export type QueryApplicantCompanyLabelsWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
};

export type QueryApplicantCompanyLabelsOrderByOrderByClause = {
    column: QueryApplicantCompanyLabelsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantCompanyLabelsOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type ApplicantDocument = {
    __typename?: 'ApplicantDocument';
    id: Scalars['ID'];
    added_from?: Maybe<Scalars['String']>;
    applicant_id: Scalars['ID'];
    applicant_type: ApplicantType;
    document_type_id?: Maybe<Scalars['ID']>;
    document_state_id?: Maybe<Scalars['ID']>;
    company?: Maybe<Company>;
    country?: Maybe<Country>;
    document_type?: Maybe<DocumentType>;
    document_state?: Maybe<DocumentState>;
    file?: Maybe<Files>;
    info?: Maybe<Scalars['String']>;
    internal_notes?: Maybe<Array<Maybe<ApplicantDocumentInternalNote>>>;
    tags?: Maybe<Array<Maybe<ApplicantDocumentTag>>>;
    reject_details?: Maybe<Array<Maybe<ApplicantDocumentRejectDetail>>>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type DocumentType = {
    __typename?: 'DocumentType';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type DocumentState = {
    __typename?: 'DocumentState';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type ApplicantDocumentInternalNote = {
    __typename?: 'ApplicantDocumentInternalNote';
    id: Scalars['ID'];
    document?: Maybe<ApplicantDocument>;
    member?: Maybe<Members>;
    note?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type ApplicantDocumentTag = {
    __typename?: 'ApplicantDocumentTag';
    id: Scalars['ID'];
    category?: Maybe<ApplicantDocumentTagCategory>;
    name: Scalars['String'];
    member?: Maybe<Members>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    description?: Maybe<Scalars['String']>;
};

export type ApplicantDocumentTagCategory = {
    __typename?: 'ApplicantDocumentTagCategory';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type ApplicantDocumentRejectDetail = {
    __typename?: 'ApplicantDocumentRejectDetail';
    id: Scalars['ID'];
    applicant_document: ApplicantDocument;
    applicant_document_tag?: Maybe<Array<ApplicantDocumentTag>>;
    member?: Maybe<Members>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type QueryApplicantIndividualLabelsWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantIndividualLabelsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditionsRelation>;
};

export enum QueryApplicantIndividualLabelsWhereColumn {
    Name = 'NAME',
    ApplicantId = 'APPLICANT_ID'
}

export type QueryApplicantIndividualLabelsWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
};

export type QueryApplicantIndividualLabelsOrderByOrderByClause = {
    column: QueryApplicantIndividualLabelsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantIndividualLabelsOrderByColumn {
    ApplicantId = 'APPLICANT_ID',
    Name = 'NAME'
}

export type ApplicantLinkedCompany = {
    __typename?: 'ApplicantLinkedCompany';
    company?: Maybe<ApplicantCompany>;
    company_position?: Maybe<ApplicantIndividualCompanyPosition>;
    company_relation?: Maybe<ApplicantIndividualCompanyRelation>;
    percentage_owned?: Maybe<Scalars['Float']>;
};

export type ApplicantModules = {
    __typename?: 'ApplicantModules';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type QueryAuthenticationLogsStatic = {
    company?: InputMaybe<Scalars['String']>;
    member?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    client_type?: InputMaybe<Scalars['String']>;
    provider?: InputMaybe<Scalars['String']>;
    group?: InputMaybe<Scalars['String']>;
    domain?: InputMaybe<Scalars['String']>;
    ip?: InputMaybe<Scalars['String']>;
    country?: InputMaybe<Scalars['String']>;
    city?: InputMaybe<Scalars['String']>;
    platform?: InputMaybe<Scalars['String']>;
    browser?: InputMaybe<Scalars['String']>;
    device_type?: InputMaybe<Scalars['String']>;
    model?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['String']>;
    expired_at?: InputMaybe<Scalars['Date']>;
    created_at?: InputMaybe<Scalars['Date']>;
};

export type AuthenticationLogs = {
    __typename?: 'AuthenticationLogs';
    data?: Maybe<Array<AuthenticationLog>>;
    paginatorInfo?: Maybe<PaginatorInfo>;
};

export type AuthenticationLog = {
    __typename?: 'AuthenticationLog';
    id: Scalars['ID'];
    company: Scalars['String'];
    email: Scalars['String'];
    member: Scalars['String'];
    client_type: Scalars['String'];
    provider: Scalars['String'];
    group: Scalars['String'];
    domain: Scalars['String'];
    ip?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    platform?: Maybe<Scalars['String']>;
    browser?: Maybe<Scalars['String']>;
    browser_version?: Maybe<Scalars['String']>;
    device_type?: Maybe<Scalars['String']>;
    model?: Maybe<Scalars['String']>;
    status?: Maybe<Scalars['String']>;
    info?: Maybe<Scalars['String']>;
    expired_at?: Maybe<Scalars['DateTimeUtc']>;
    created_at: Scalars['DateTimeUtc'];
};

export type CompanyModuleIbanProviderPassword = {
    __typename?: 'CompanyModuleIbanProviderPassword';
    id: Scalars['ID'];
    password: Scalars['String'];
};

export type CompanyModulePaymentProviderPassword = {
    __typename?: 'CompanyModulePaymentProviderPassword';
    id: Scalars['ID'];
    password: Scalars['String'];
};

export type DashboardAccountsStatistic = {
    __typename?: 'dashboardAccountsStatistic';
    account_state_id: Scalars['ID'];
    payment_provider_id: Scalars['ID'];
    payment_provider_name: Scalars['String'];
    account_state_name: Scalars['String'];
    count: Scalars['Int'];
};

export type DashboardTicketsStatistic = {
    __typename?: 'dashboardTicketsStatistic';
    status_id: Scalars['ID'];
    status_name: Scalars['String'];
    count: Scalars['Int'];
};

export type DashboardTransfersStatistic = {
    __typename?: 'dashboardTransfersStatistic';
    transfer_type: Scalars['String'];
    status_name: Scalars['String'];
    count: Scalars['Int'];
};

export type DashboardUsersStatistic = {
    __typename?: 'dashboardUsersStatistic';
    applicant_type: Scalars['String'];
    status_name: Scalars['String'];
    count: Scalars['Int'];
};

export type EmailNotification = {
    __typename?: 'EmailNotification';
    id: Scalars['ID'];
    type?: Maybe<NotifyType>;
    recipient_type?: Maybe<RecipientType>;
    group_type?: Maybe<GroupType>;
    templates?: Maybe<Array<Maybe<EmailTemplate>>>;
    clientable?: Maybe<Clientable>;
    company?: Maybe<Company>;
    group_role?: Maybe<GroupRole>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export enum NotifyType {
    Administration = 'Administration',
    Client = 'Client'
}

export enum RecipientType {
    Person = 'PERSON',
    Group = 'GROUP'
}

export type EmailTemplate = {
    __typename?: 'EmailTemplate';
    id: Scalars['ID'];
    name: Scalars['String'];
    subject: Scalars['String'];
    type: ClientType;
    service_type: ServiceType;
    content: Scalars['String'];
    company?: Maybe<Company>;
    layout?: Maybe<EmailTemplateLayout>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
    use_layout?: Maybe<Scalars['Boolean']>;
};

export enum ClientType {
    Administration = 'Administration',
    Client = 'Client'
}

export enum ServiceType {
    BankingCommon = 'BankingCommon',
    BankingSystem = 'BankingSystem',
    Banking = 'Banking',
    Common = 'Common',
    System = 'System',
    AdminNotify = 'AdminNotify'
}

export type EmailTemplateLayout = {
    __typename?: 'EmailTemplateLayout';
    id: Scalars['ID'];
    header: Scalars['String'];
    footer: Scalars['String'];
    company_id: Scalars['Int'];
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type Clientable = ApplicantIndividual | ApplicantCompany | Members;

export type EmailSmtp = {
    __typename?: 'EmailSmtp';
    id: Scalars['ID'];
    security?: Maybe<Securities>;
    host_name: Scalars['String'];
    from_name?: Maybe<Scalars['String']>;
    from_email?: Maybe<Scalars['String']>;
    username: Scalars['String'];
    password: Scalars['String'];
    replay_to?: Maybe<Scalars['String']>;
    port: Scalars['Int'];
    is_sending_mail?: Maybe<Scalars['Boolean']>;
    name?: Maybe<Scalars['String']>;
    member?: Maybe<Members>;
    company?: Maybe<Company>;
};

export enum Securities {
    Auto = 'Auto',
    Ssl = 'Ssl',
    Starttls = 'Starttls'
}

export type QueryEmailSmtpsOrderByOrderByClause = {
    column: QueryEmailSmtpsOrderByColumn;
    order: SortOrder;
};

export enum QueryEmailSmtpsOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type QueryEmailTemplatesFilterFilterConditions = {
    column?: InputMaybe<QueryEmailTemplatesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
};

export enum QueryEmailTemplatesFilterStatic {
    HasCompanyFilterByName = 'HAS_COMPANY_FILTER_BY_NAME',
    Name = 'NAME',
    CompanyId = 'COMPANY_ID',
    Type = 'TYPE',
    ServiceType = 'SERVICE_TYPE'
}

export type QueryEmailTemplatesOrderByOrderByClause = {
    column: QueryEmailTemplatesOrderByColumn;
    order: SortOrder;
};

export enum QueryEmailTemplatesOrderByColumn {
    Id = 'ID'
}

export type Fee = {
    __typename?: 'Fee';
    created_at: Scalars['DateTimeUtc'];
    fee: Scalars['Decimal'];
    fee_pp: Scalars['Decimal'];
    fee_amount: Scalars['Decimal'];
    transfer_outgoing?: Maybe<TransferOutgoing>;
    transfer_type: Scalars['String'];
    operation_type?: Maybe<OperationType>;
    price_list_fee?: Maybe<PriceListFee>;
    client?: Maybe<Client>;
    member?: Maybe<Members>;
    account?: Maybe<Account>;
    status?: Maybe<PaymentStatus>;
};

export type TransferOutgoing = {
    __typename?: 'TransferOutgoing';
    id: Scalars['ID'];
    requested_by?: Maybe<Clientable>;
    user_type?: Maybe<UserType>;
    amount: Scalars['Decimal'];
    amount_debt: Scalars['Decimal'];
    fee?: Maybe<Fee>;
    fees?: Maybe<Array<Maybe<Fee>>>;
    files?: Maybe<Array<Maybe<Files>>>;
    currency?: Maybe<Currencies>;
    status?: Maybe<PaymentStatus>;
    payment_urgency?: Maybe<PaymentUrgency>;
    payment_operation_type?: Maybe<OperationType>;
    payment_provider?: Maybe<PaymentProvider>;
    payment_provider_history?: Maybe<PaymentProviderHistory>;
    payment_system?: Maybe<PaymentSystem>;
    payment_bank?: Maybe<PaymentBank>;
    payment_number: Scalars['String'];
    transfer_type?: Maybe<TypeOfTransfer>;
    account?: Maybe<Account>;
    sender?: Maybe<Client>;
    company?: Maybe<Company>;
    system_message?: Maybe<Scalars['String']>;
    reason?: Maybe<Scalars['String']>;
    channel?: Maybe<Scalars['String']>;
    bank_message?: Maybe<Scalars['String']>;
    recipient_account: Scalars['String'];
    recipient_bank_name: Scalars['String'];
    recipient_bank_address: Scalars['String'];
    recipient_bank_swift?: Maybe<Scalars['String']>;
    recipient_bank_country?: Maybe<Country>;
    recipient_name: Scalars['String'];
    recipient_country?: Maybe<Country>;
    recipient_city: Scalars['String'];
    recipient_address: Scalars['String'];
    recipient_state: Scalars['String'];
    recipient_zip: Scalars['String'];
    respondent_fee?: Maybe<RespondentFee>;
    execution_at?: Maybe<Scalars['DateTimeUtc']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export enum UserType {
    ApplicantIndividual = 'ApplicantIndividual',
    ApplicantCompany = 'ApplicantCompany',
    Members = 'Members'
}

export type PaymentStatus = {
    __typename?: 'PaymentStatus';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type PaymentUrgency = {
    __typename?: 'PaymentUrgency';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type PaymentProviderHistory = {
    __typename?: 'PaymentProviderHistory';
    id: Scalars['ID'];
    payment_provider_id: Scalars['ID'];
    transfer_id: Scalars['ID'];
    transfer_type?: Maybe<Scalars['String']>;
    provider_response?: Maybe<Scalars['JSON']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type TypeOfTransfer = {
    __typename?: 'TypeOfTransfer';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type RespondentFee = {
    __typename?: 'RespondentFee';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type FeeMode = {
    __typename?: 'FeeMode';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type QueryFeeTypesFilterFilterConditions = {
    column?: InputMaybe<QueryFeeTypesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
};

export enum QueryFeeTypesFilterStatic {
    HasOperationTypeFilterById = 'HAS_OPERATION_TYPE_FILTER_BY_ID'
}

export type QueryGroupTypesFilterFilterConditions = {
    column?: InputMaybe<QueryGroupTypesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
};

export enum QueryGroupTypesFilterStatic {
    HasGroupsFilterByCompanyId = 'HAS_GROUPS_FILTER_BY_COMPANY_ID',
    HasGroupsFilterByRoleId = 'HAS_GROUPS_FILTER_BY_ROLE_ID',
    HasRolesFilterById = 'HAS_ROLES_FILTER_BY_ID'
}

export type KycTimeline = {
    __typename?: 'KycTimeline';
    id: Scalars['ID'];
    os: Scalars['String'];
    browser: Scalars['String'];
    ip: Scalars['String'];
    action: Scalars['String'];
    action_type: KycTimelineActionType;
    tag: Scalars['String'];
    creator?: Maybe<Members>;
    document?: Maybe<ApplicantDocument>;
    applicant_id: Scalars['ID'];
    applicant_type: ApplicantType;
    applicant?: Maybe<Client>;
    company?: Maybe<Company>;
    action_old_value?: Maybe<Scalars['JSON']>;
    action_new_value?: Maybe<Scalars['JSON']>;
    created_at: Scalars['DateTimeUtc'];
};

export enum KycTimelineActionType {
    DocumentUpload = 'DOCUMENT_UPLOAD',
    DocumentState = 'DOCUMENT_STATE',
    Verification = 'VERIFICATION',
    Email = 'EMAIL',
    Profile = 'PROFILE'
}

export type QueryKycTimelinesOrderByOrderByClause = {
    column: QueryKycTimelinesOrderByColumn;
    order: SortOrder;
};

export enum QueryKycTimelinesOrderByColumn {
    Id = 'ID',
    CreatedAt = 'CREATED_AT'
}

export type KycTimelines = {
    __typename?: 'KycTimelines';
    data?: Maybe<Array<KycTimeline>>;
    paginatorInfo?: Maybe<PaginatorInfo>;
};

export type MemberProfile = {
    __typename?: 'MemberProfile';
    id: Scalars['ID'];
    first_name?: Maybe<Scalars['String']>;
    last_name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['EMAIL']>;
    sex?: Maybe<Sex>;
    is_active?: Maybe<Scalars['Boolean']>;
    last_login_at?: Maybe<Scalars['DateTimeUtc']>;
    company: Company;
    country?: Maybe<Country>;
    language?: Maybe<Languages>;
    group?: Maybe<GroupRole>;
    position?: Maybe<DepartmentPosition>;
    department?: Maybe<Department>;
    two_factor_auth_setting_id?: Maybe<Scalars['ID']>;
    two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
    additional_fields?: Maybe<Scalars['JSON']>;
    additional_info_fields?: Maybe<Scalars['JSON']>;
    fullname?: Maybe<Scalars['String']>;
    access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
    is_show_owner_applicants?: Maybe<Scalars['Boolean']>;
    security_pin?: Maybe<Scalars['String']>;
    google2fa_secret?: Maybe<Scalars['String']>;
    backup_codes?: Maybe<Scalars['JSON']>;
    is_sign_transaction?: Maybe<Scalars['Boolean']>;
    ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
};

export type QueryModulesWhereWhereConditions = {
    column?: InputMaybe<QueryModulesWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
    HAS?: InputMaybe<QueryModulesWhereWhereConditionsRelation>;
};

export enum QueryModulesWhereColumn {
    Name = 'NAME'
}

export type QueryModulesWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryModulesWhereWhereConditions>;
};

export type QueryModulesOrderByOrderByClause = {
    column: QueryModulesOrderByColumn;
    order: SortOrder;
};

export enum QueryModulesOrderByColumn {
    Id = 'ID'
}

export type QueryModulesWithKycWhereWhereConditions = {
    column?: InputMaybe<QueryModulesWithKycWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
    HAS?: InputMaybe<QueryModulesWithKycWhereWhereConditionsRelation>;
};

export enum QueryModulesWithKycWhereColumn {
    Name = 'NAME'
}

export type QueryModulesWithKycWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
};

export type QueryModulesWithKycOrderByOrderByClause = {
    column: QueryModulesWithKycOrderByColumn;
    order: SortOrder;
};

export enum QueryModulesWithKycOrderByColumn {
    Id = 'ID'
}

export type QueryOperationTypesFilterFilterConditions = {
    column?: InputMaybe<QueryOperationTypesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
};

export enum QueryOperationTypesFilterStatic {
    FeeTypeId = 'FEE_TYPE_ID',
    TransferType = 'TRANSFER_TYPE',
    PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

export type QueryPaymentStatusesFilterFilterConditions = {
    column?: InputMaybe<QueryPaymentStatusesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
};

export enum QueryPaymentStatusesFilterStatic {
    OperationType = 'OPERATION_TYPE'
}

export type Sender = {
    __typename?: 'Sender';
    sender_name: Scalars['String'];
};

export type Payments = {
    __typename?: 'Payments';
    id: Scalars['ID'];
    account?: Maybe<Account>;
    currency?: Maybe<Currencies>;
    price_list_fees?: Maybe<PriceListFee>;
    recipient_account?: Maybe<Scalars['String']>;
    recipient_bank_name?: Maybe<Scalars['String']>;
    recipient_bank_address?: Maybe<Scalars['String']>;
    recipient_bank_swift?: Maybe<Scalars['String']>;
    recipient_bank_country?: Maybe<Country>;
    beneficiary_name?: Maybe<Scalars['String']>;
    beneficiary_state?: Maybe<Scalars['String']>;
    beneficiary_country?: Maybe<Country>;
    beneficiary_address?: Maybe<Scalars['String']>;
    beneficiary_city?: Maybe<Scalars['String']>;
    beneficiary_zip?: Maybe<Scalars['String']>;
    beneficiary_additional_data?: Maybe<Scalars['JSON']>;
    amount: Scalars['Decimal'];
    amount_real: Scalars['Decimal'];
    status_id?: Maybe<Scalars['ID']>;
    fee?: Maybe<Scalars['Decimal']>;
    fee_type?: Maybe<FeeType>;
    member?: Maybe<Members>;
    company?: Maybe<Company>;
    payment_urgency?: Maybe<PaymentUrgency>;
    status?: Maybe<PaymentStatus>;
    payment_operation_type?: Maybe<OperationType>;
    payment_provider?: Maybe<PaymentProvider>;
    payment_number?: Maybe<Scalars['String']>;
    received_at?: Maybe<Scalars['DateTimeUtc']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
    execution_at?: Maybe<Scalars['DateTimeUtc']>;
    respondent_fee?: Maybe<RespondentFee>;
    error?: Maybe<Scalars['String']>;
};

export type QueryPermissionsWhereWhereConditions = {
    column?: InputMaybe<QueryPermissionsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
    HAS?: InputMaybe<QueryPermissionsWhereWhereConditionsRelation>;
};

export enum QueryPermissionsWhereColumn {
    Name = 'NAME',
    Id = 'ID'
}

export type QueryPermissionsWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};

export type QueryPriceListFeesFilterFilterConditions = {
    column?: InputMaybe<QueryPriceListFeesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
};

export enum QueryPriceListFeesFilterStatic {
    Id = 'ID',
    PriceListId = 'PRICE_LIST_ID',
    TypeId = 'TYPE_ID',
    OperationTypeId = 'OPERATION_TYPE_ID',
    PeriodId = 'PERIOD_ID',
    HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
    HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
    HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
    HasFeesFilterById = 'HAS_FEES_FILTER_BY_ID'
}

export type ProjectApiSettingPassword = {
    __typename?: 'ProjectApiSettingPassword';
    id: Scalars['ID'];
    password: Scalars['String'];
};

export type Requisite = {
    __typename?: 'Requisite';
    id?: Maybe<Scalars['ID']>;
    owner?: Maybe<ApplicantIndividual>;
    bank?: Maybe<PaymentBank>;
    account_number?: Maybe<Scalars['String']>;
    currency?: Maybe<Currencies>;
};

export type QueryRequisitesFilterFilterConditions = {
    column?: InputMaybe<QueryRequisitesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
};

export enum QueryRequisitesFilterStatic {
    CompanyId = 'COMPANY_ID',
    PaymentProviderId = 'PAYMENT_PROVIDER_ID',
    PaymentSystemId = 'PAYMENT_SYSTEM_ID',
    PaymentBankId = 'PAYMENT_BANK_ID',
    AccountNumber = 'ACCOUNT_NUMBER'
}

export type StatusType = {
    __typename?: 'StatusType';
    status: Scalars['String'];
    message?: Maybe<Scalars['String']>;
};

export type TicketComments = {
    __typename?: 'TicketComments';
    id: Scalars['ID'];
    message: Scalars['String'];
    file_object?: Maybe<Files>;
    ticket?: Maybe<Ticket>;
    client?: Maybe<ApplicantIndividual>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type Ticket = {
    __typename?: 'Ticket';
    id: Scalars['ID'];
    title: Scalars['String'];
    message: Scalars['String'];
    status?: Maybe<TicketStatus>;
    file_object?: Maybe<Files>;
    company?: Maybe<Company>;
    position?: Maybe<DepartmentPosition>;
    department?: Maybe<Department>;
    member?: Maybe<Members>;
    client?: Maybe<ApplicantIndividual>;
    comments?: Maybe<Array<Maybe<TicketComments>>>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type TicketStatus = {
    __typename?: 'TicketStatus';
    id: Scalars['ID'];
    name: Scalars['String'];
};

export type TransferIncoming = {
    __typename?: 'TransferIncoming';
    id: Scalars['ID'];
    amount: Scalars['Decimal'];
    amount_debt: Scalars['Decimal'];
    fee?: Maybe<Fee>;
    fees?: Maybe<Array<Maybe<Fee>>>;
    files?: Maybe<Array<Maybe<Files>>>;
    currency?: Maybe<Currencies>;
    status?: Maybe<PaymentStatus>;
    payment_urgency?: Maybe<PaymentUrgency>;
    payment_operation_type?: Maybe<OperationType>;
    payment_provider?: Maybe<PaymentProvider>;
    payment_provider_history?: Maybe<PaymentProviderHistory>;
    payment_system?: Maybe<PaymentSystem>;
    payment_bank?: Maybe<PaymentBank>;
    payment_number: Scalars['String'];
    transfer_type?: Maybe<TypeOfTransfer>;
    account?: Maybe<Account>;
    recipient?: Maybe<Client>;
    company?: Maybe<Company>;
    system_message?: Maybe<Scalars['String']>;
    reason?: Maybe<Scalars['String']>;
    channel?: Maybe<Scalars['String']>;
    bank_message?: Maybe<Scalars['String']>;
    sender_account?: Maybe<Scalars['String']>;
    sender_bank_name?: Maybe<Scalars['String']>;
    sender_bank_address?: Maybe<Scalars['String']>;
    sender_bank_swift?: Maybe<Scalars['String']>;
    sender_bank_country?: Maybe<Country>;
    sender_name?: Maybe<Scalars['String']>;
    sender_country?: Maybe<Country>;
    sender_city?: Maybe<Scalars['String']>;
    sender_address?: Maybe<Scalars['String']>;
    sender_state?: Maybe<Scalars['String']>;
    sender_zip?: Maybe<Scalars['String']>;
    respondent_fee?: Maybe<RespondentFee>;
    execution_at?: Maybe<Scalars['DateTimeUtc']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    updated_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type TransferIncomingStatistic = {
    __typename?: 'TransferIncomingStatistic';
    status_id: Scalars['ID'];
    name: Scalars['String'];
    count: Scalars['Int'];
};

export type TransferOutgoingStatistic = {
    __typename?: 'TransferOutgoingStatistic';
    status_id: Scalars['ID'];
    name: Scalars['String'];
    count: Scalars['Int'];
};

export type UserAuthResponse = {
    __typename?: 'userAuthResponse';
    data?: Maybe<Users>;
    permissions: PermissionAuth;
};

export type Users = {
    __typename?: 'Users';
    id?: Maybe<Scalars['ID']>;
    first_name?: Maybe<Scalars['String']>;
    last_name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['EMAIL']>;
    company?: Maybe<Company>;
    group?: Maybe<GroupRole>;
    fullname?: Maybe<Scalars['String']>;
};

export type PermissionAuth = {
    __typename?: 'PermissionAuth';
    PERMISSION_TICKETS: Array<Permission_Tickets>;
    PERMISSION_DASHBOARD: Array<Permission_Dashboard>;
    PERMISSION_MY_NET_WORTH: Array<Permission_My_Net_Worth>;
    PERMISSION_ACCOUNT_DETAILS: Array<Permission_Account_Details>;
    PERMISSION_MAKE_PAYMENTS: Array<Permission_Make_Payments>;
    PERMISSION_REQUISITES: Array<Permission_Requisites>;
    PERMISSION_MY_TEMPLATES: Array<Permission_My_Templates>;
    PERMISSION_STATEMENTS: Array<Permission_Statements>;
    PERMISSION_PAYMENT_LIST: Array<Permission_Payment_List>;
    PERMISSION_PAYMENT_DETAILS: Array<Permission_Payment_Details>;
    PERMISSION_SETTINGS_CONTACT_DETAILS: Array<Permission_Settings_Contact_Details>;
    PERMISSION_SETTINGS_LOG_IN_DETAILS: Array<Permission_Settings_Log_In_Details>;
    PERMISSION_SETTINGS_SECURITY_LEVEL: Array<Permission_Settings_Security_Level>;
    PERMISSION_SETTINGS_ACCOUNT: Array<Permission_Settings_Account>;
};

export enum Permission_Tickets {
    Read = 'READ',
    NewTicket = 'NEW_TICKET',
    CloseTicket = 'CLOSE_TICKET',
    StatusReplyRequired = 'STATUS_REPLY_REQUIRED',
    StatusOpened = 'STATUS_OPENED',
    StatusClosed = 'STATUS_CLOSED',
    StatusNoReplyRequired = 'STATUS_NO_REPLY_REQUIRED'
}

export enum Permission_Dashboard {
    Yes = 'YES',
    Feedback = 'FEEDBACK',
    InviteFriends = 'INVITE_FRIENDS',
    LastPayments = 'LAST_PAYMENTS'
}

export enum Permission_My_Net_Worth {
    Yes = 'YES',
    Summary = 'SUMMARY',
    Assets = 'ASSETS',
    Liabilities = 'LIABILITIES'
}

export enum Permission_Account_Details {
    Read = 'READ',
    Edit = 'EDIT',
    ShowBalance = 'SHOW_BALANCE',
    ShowProviderInfo = 'SHOW_PROVIDER_INFO',
    StatusPending = 'STATUS_PENDING',
    StatusActive = 'STATUS_ACTIVE',
    WaitingForIBANActivation = 'WAITING_FOR_I_B_A_N_ACTIVATION',
    StatusClosed = 'STATUS_CLOSED',
    StatusSuspended = 'STATUS_SUSPENDED'
}

export enum Permission_Make_Payments {
    CreatePayments = 'CREATE_PAYMENTS',
    SignPayments = 'SIGN_PAYMENTS'
}

export enum Permission_Requisites {
    Read = 'READ',
    DownloadRequisites = 'DOWNLOAD_REQUISITES',
    SendRequisitesDetails = 'SEND_REQUISITES_DETAILS'
}

export enum Permission_My_Templates {
    Read = 'READ',
    Edit = 'EDIT',
    Delete = 'DELETE',
    AddNew = 'ADD_NEW'
}

export enum Permission_Statements {
    Read = 'READ',
    ExportStatement = 'EXPORT_STATEMENT'
}

export enum Permission_Payment_List {
    Read = 'READ',
    Edit = 'EDIT',
    CancelPayment = 'CANCEL_PAYMENT'
}

export enum Permission_Payment_Details {
    Read = 'READ',
    ExportPaymentDetails = 'EXPORT_PAYMENT_DETAILS'
}

export enum Permission_Settings_Contact_Details {
    Read = 'READ',
    Edit = 'EDIT'
}

export enum Permission_Settings_Log_In_Details {
    Read = 'READ',
    Edit = 'EDIT',
    MyDevice = 'MY_DEVICE',
    TwoFactorAuthentication = 'TWO_FACTOR_AUTHENTICATION',
    SecurePin = 'SECURE_PIN'
}

export enum Permission_Settings_Security_Level {
    Read = 'READ',
    Edit = 'EDIT'
}

export enum Permission_Settings_Account {
    Read = 'READ',
    Edit = 'EDIT'
}

export type QueryApplicantAccountsFilterFilterConditions = {
    column?: InputMaybe<QueryApplicantAccountsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
};

export enum QueryApplicantAccountsFilterStatic {
    IsShow = 'IS_SHOW'
}

export type QueryApplicantAccountsOrderByOrderByClause = {
    column: QueryApplicantAccountsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantAccountsOrderByColumn {
    Id = 'ID',
    CurrentBalance = 'CURRENT_BALANCE'
}

export type ApplicantAccount = {
    __typename?: 'ApplicantAccount';
    id: Scalars['ID'];
    currency?: Maybe<Currencies>;
    account_number?: Maybe<Scalars['String']>;
    account_type: Scalars['String'];
    account_name: Scalars['String'];
    current_balance?: Maybe<Scalars['Decimal']>;
    is_show?: Maybe<Scalars['Boolean']>;
    is_primary?: Maybe<Scalars['Boolean']>;
};

export type ApplicantDevice = {
    __typename?: 'ApplicantDevice';
    id?: Maybe<Scalars['ID']>;
    ip?: Maybe<Scalars['String']>;
    platform?: Maybe<Scalars['String']>;
    browser?: Maybe<Scalars['String']>;
    device_type?: Maybe<Scalars['String']>;
    model?: Maybe<Scalars['String']>;
    trusted: Scalars['Boolean'];
    expired_at?: Maybe<Scalars['DateTimeUtc']>;
    created_at: Scalars['DateTimeUtc'];
};

export type ApplicantProfile = {
    __typename?: 'ApplicantProfile';
    id: Scalars['ID'];
    first_name?: Maybe<Scalars['String']>;
    last_name?: Maybe<Scalars['String']>;
    middle_name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['EMAIL']>;
    url?: Maybe<Scalars['String']>;
    phone?: Maybe<Scalars['String']>;
    is_verification_phone?: Maybe<Scalars['Boolean']>;
    country?: Maybe<Country>;
    language?: Maybe<Languages>;
    citizenship_country?: Maybe<Country>;
    state?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    address?: Maybe<Scalars['String']>;
    zip?: Maybe<Scalars['String']>;
    nationality?: Maybe<Scalars['String']>;
    birth_country?: Maybe<Country>;
    birth_state?: Maybe<Scalars['String']>;
    birth_city?: Maybe<Scalars['String']>;
    birth_at?: Maybe<Scalars['Date']>;
    sex?: Maybe<Sex>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    profile_additional_fields?: Maybe<Scalars['JSON']>;
    personal_additional_fields?: Maybe<Scalars['JSON']>;
    contacts_additional_fields?: Maybe<Scalars['JSON']>;
    fullname?: Maybe<Scalars['String']>;
    status?: Maybe<ApplicantStatus>;
    applicant_state?: Maybe<ApplicantState>;
    state_reason?: Maybe<ApplicantStateReason>;
    risk_level?: Maybe<ApplicantRiskLevel>;
    manager?: Maybe<Members>;
    labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
    company?: Maybe<Company>;
    notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
    modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
    companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
    group?: Maybe<GroupRole>;
    photo?: Maybe<Files>;
    notify_device_email?: Maybe<Scalars['Boolean']>;
    two_factor_auth?: Maybe<TwoFactorAuthSettings>;
    security_pin?: Maybe<Scalars['String']>;
    google2fa_secret?: Maybe<Scalars['String']>;
    backup_codes?: Maybe<Scalars['JSON']>;
    ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
};

export type ApplicantDetailsRequisites = {
    __typename?: 'ApplicantDetailsRequisites';
    currency: Scalars['String'];
    beneficiary: Scalars['String'];
    address: Scalars['String'];
    country: Scalars['String'];
    iban: Scalars['String'];
    bank_name: Scalars['String'];
    swift_code: Scalars['String'];
    bank_address: Scalars['String'];
    bank_country: Scalars['String'];
};

export type ApplicantRequisites = {
    __typename?: 'ApplicantRequisites';
    id: Scalars['ID'];
    account_number: Scalars['String'];
    owner?: Maybe<ApplicantProfile>;
    bank?: Maybe<PaymentBank>;
    currency?: Maybe<Currencies>;
};

export type LanguagesPaginator = {
    __typename?: 'LanguagesPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Languages>;
};

export type QueryAccountLimitsFilterFilterConditions = {
    column?: InputMaybe<QueryAccountLimitsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryAccountLimitsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryAccountLimitsFilterFilterConditions>>;
};

export enum QueryAccountLimitsFilterStatic {
    HasCurrencyMixedIdOrName = 'HAS_CURRENCY_MIXED_ID_OR_NAME',
    HasCommissionTemplateLimitTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TYPE_MIXED_ID_OR_NAME',
    HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TRANSFER_DIRECTION_MIXED_ID_OR_NAME',
    HasCommissionTemplateLimitPeriodMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_PERIOD_MIXED_ID_OR_NAME',
    HasCommissionTemplateLimitActionTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_ACTION_TYPE_MIXED_ID_OR_NAME',
    AccountId = 'ACCOUNT_ID',
    PeriodCount = 'PERIOD_COUNT'
}

export type QueryAccountLimitsOrderByOrderByClause = {
    column: QueryAccountLimitsOrderByColumn;
    order: SortOrder;
};

export enum QueryAccountLimitsOrderByColumn {
    Id = 'ID'
}

export type AccountLimitPaginator = {
    __typename?: 'AccountLimitPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<AccountLimit>;
};

export type QueryAccountReachedLimitsFilterFilterConditions = {
    column?: InputMaybe<QueryAccountReachedLimitsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
};

export enum QueryAccountReachedLimitsFilterStatic {
    AccountId = 'ACCOUNT_ID',
    LimitCurrency = 'LIMIT_CURRENCY',
    LimitType = 'LIMIT_TYPE',
    LimitValue = 'LIMIT_VALUE',
    TransferDirection = 'TRANSFER_DIRECTION',
    Period = 'PERIOD',
    Amount = 'AMOUNT'
}

export type QueryAccountReachedLimitsHasAccountWhereHasConditions = {
    column?: InputMaybe<QueryAccountReachedLimitsHasAccountColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
    OR?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
    HAS?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation>;
};

export enum QueryAccountReachedLimitsHasAccountColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
};

export type QueryAccountReachedLimitsWhereWhereConditions = {
    column?: InputMaybe<QueryAccountReachedLimitsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
    HAS?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditionsRelation>;
};

export enum QueryAccountReachedLimitsWhereColumn {
    AccountId = 'ACCOUNT_ID',
    GroupType = 'GROUP_TYPE',
    ClientName = 'CLIENT_NAME',
    ClientType = 'CLIENT_TYPE',
    TransferDirection = 'TRANSFER_DIRECTION',
    LimitType = 'LIMIT_TYPE',
    LimitValue = 'LIMIT_VALUE',
    LimitCurrency = 'LIMIT_CURRENCY',
    Period = 'PERIOD',
    Amount = 'AMOUNT'
}

export type QueryAccountReachedLimitsWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
};

export type QueryAccountReachedLimitsOrderByOrderByClause = {
    column: QueryAccountReachedLimitsOrderByColumn;
    order: SortOrder;
};

export enum QueryAccountReachedLimitsOrderByColumn {
    Id = 'ID'
}

export type AccountReachedLimitPaginator = {
    __typename?: 'AccountReachedLimitPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<AccountReachedLimit>;
};

export type QueryAccountListFilterFilterConditions = {
    column?: InputMaybe<QueryAccountListFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
};

export enum QueryAccountListFilterStatic {
    HasCompanyMixedIdOrName = 'HAS_COMPANY_MIXED_ID_OR_NAME',
    HasPaymentProviderMixedIdOrName = 'HAS_PAYMENT_PROVIDER_MIXED_ID_OR_NAME',
    HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME',
    HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
    MixedAccountNumberOrAccountName = 'MIXED_ACCOUNT_NUMBER_OR_ACCOUNT_NAME',
    CurrencyId = 'CURRENCY_ID',
    HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
    GroupTypeId = 'GROUP_TYPE_ID',
    HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
    IsPrimary = 'IS_PRIMARY',
    HasCommissionTemplateMixedIdOrFullname = 'HAS_COMMISSION_TEMPLATE_MIXED_ID_OR_FULLNAME',
    AccountStateId = 'ACCOUNT_STATE_ID',
    HasClientableMixedIdOrFullname = 'HAS_CLIENTABLE_MIXED_ID_OR_FULLNAME'
}

export type QueryAccountListOrderByOrderByClause = {
    column: QueryAccountListOrderByColumn;
    order: SortOrder;
};

export enum QueryAccountListOrderByColumn {
    Id = 'ID',
    CreatedAt = 'CREATED_AT'
}

export type AccountPaginator = {
    __typename?: 'AccountPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Account>;
};

export type QueryApplicantIndividualsFilterFilterConditions = {
    column?: InputMaybe<QueryApplicantIndividualsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
};

export enum QueryApplicantIndividualsFilterStatic {
    Id = 'ID',
    Fullname = 'FULLNAME',
    Email = 'EMAIL',
    CompanyId = 'COMPANY_ID',
    ProjectId = 'PROJECT_ID',
    KycLevelId = 'KYC_LEVEL_ID',
    HasRiskLevelFilterById = 'HAS_RISK_LEVEL_FILTER_BY_ID',
    HasStateReasonFilterById = 'HAS_STATE_REASON_FILTER_BY_ID',
    HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
    HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
    HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID'
}

export enum Sort {
    Asc = 'ASC',
    Desc = 'DESC'
}

export type QueryApplicantIndividualsOrderByOrderByClause = {
    column: QueryApplicantIndividualsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantIndividualsOrderByColumn {
    Id = 'ID',
    FirstName = 'FIRST_NAME',
    LastName = 'LAST_NAME',
    Email = 'EMAIL',
    CreatedAt = 'CREATED_AT',
    Fullname = 'FULLNAME',
    CompanyId = 'COMPANY_ID'
}

export type ApplicantIndividualPaginator = {
    __typename?: 'ApplicantIndividualPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantIndividual>;
};

export type QueryApplicantCompaniesFilterFilterConditions = {
    column?: InputMaybe<QueryApplicantCompaniesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
};

export enum QueryApplicantCompaniesFilterStatic {
    Id = 'ID',
    CompanyId = 'COMPANY_ID',
    ProjectId = 'PROJECT_ID',
    AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
    HasStateReasonMixedIdOrName = 'HAS_STATE_REASON_MIXED_ID_OR_NAME',
    HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
    HasRiskLevelMixedIdOrName = 'HAS_RISK_LEVEL_MIXED_ID_OR_NAME',
    HasStatusMixedIdOrName = 'HAS_STATUS_MIXED_ID_OR_NAME',
    HasBusinessTypeMixedIdOrName = 'HAS_BUSINESS_TYPE_MIXED_ID_OR_NAME',
    HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
    HasKycLevelMixedIdOrName = 'HAS_KYC_LEVEL_MIXED_ID_OR_NAME',
    HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
    HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
    Name = 'NAME',
    Url = 'URL',
    Email = 'EMAIL'
}

export type QueryApplicantCompaniesWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantCompaniesWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantCompaniesWhereWhereConditionsRelation>;
};

export enum QueryApplicantCompaniesWhereColumn {
    Id = 'ID',
    AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
    ApplicantStateId = 'APPLICANT_STATE_ID',
    ApplicantStateReasonId = 'APPLICANT_STATE_REASON_ID',
    Name = 'NAME',
    Url = 'URL',
    Email = 'EMAIL',
    CreatedAt = 'CREATED_AT',
    GroupId = 'GROUP_ID',
    CompanyId = 'COMPANY_ID'
}

export type QueryApplicantCompaniesWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
};

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditions = {
    column?: InputMaybe<QueryApplicantCompaniesHasGroupRoleColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
    HAS?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasGroupRoleColumn {
    Name = 'NAME',
    Id = 'ID'
}

export type QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
};

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditions = {
    column?: InputMaybe<QueryApplicantCompaniesHasRiskLevelColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
    HAS?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasRiskLevelColumn {
    Name = 'NAME',
    Id = 'ID'
}

export type QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
};

export type QueryApplicantCompaniesHasStateReasonWhereHasConditions = {
    column?: InputMaybe<QueryApplicantCompaniesHasStateReasonColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
    HAS?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasStateReasonColumn {
    Name = 'NAME',
    Id = 'ID'
}

export type QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
};

export type QueryApplicantCompaniesHasStatusWhereHasConditions = {
    column?: InputMaybe<QueryApplicantCompaniesHasStatusColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
    HAS?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasStatusColumn {
    Name = 'NAME',
    Id = 'ID'
}

export type QueryApplicantCompaniesHasStatusWhereHasConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
};

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditions = {
    column?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
    HAS?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasBusinessTypeColumn {
    Name = 'NAME',
    Id = 'ID'
}

export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
};

export type QueryApplicantCompaniesHasOwnerWhereHasConditions = {
    column?: InputMaybe<QueryApplicantCompaniesHasOwnerColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
    HAS?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasOwnerColumn {
    Fullname = 'FULLNAME',
    Id = 'ID'
}

export type QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
};

export type QueryApplicantCompaniesHasKycLevelWhereHasConditions = {
    column?: InputMaybe<QueryApplicantCompaniesHasKycLevelColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
    HAS?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation>;
};

export enum QueryApplicantCompaniesHasKycLevelColumn {
    Name = 'NAME',
    Id = 'ID'
}

export type QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
};

export type QueryApplicantCompaniesOrderByOrderByClause = {
    column: QueryApplicantCompaniesOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantCompaniesOrderByColumn {
    Id = 'ID',
    Name = 'NAME',
    Email = 'EMAIL',
    CreatedAt = 'CREATED_AT',
    Url = 'URL',
    OwnerId = 'OWNER_ID',
    CompanyId = 'COMPANY_ID'
}

export type ApplicantCompanyPaginator = {
    __typename?: 'ApplicantCompanyPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantCompany>;
};

export type QueryApplicantCompanyBusinessTypeWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation>;
};

export enum QueryApplicantCompanyBusinessTypeWhereColumn {
    Name = 'NAME'
}

export type QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
};

export type QueryApplicantCompanyBusinessTypeOrderByOrderByClause = {
    column: QueryApplicantCompanyBusinessTypeOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantCompanyBusinessTypeOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type ApplicantCompanyBusinessTypePaginator = {
    __typename?: 'ApplicantCompanyBusinessTypePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantCompanyBusinessType>;
};

export type QueryApplicantCompanyLabelsAvailableOrderByOrderByClause = {
    column: QueryApplicantCompanyLabelsAvailableOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantCompanyLabelsAvailableOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type ApplicantCompanyLabelPaginator = {
    __typename?: 'ApplicantCompanyLabelPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantCompanyLabel>;
};

export type QueryApplicantCompanyNotesOrderByOrderByClause = {
    column: QueryApplicantCompanyNotesOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantCompanyNotesOrderByColumn {
    Id = 'ID',
    CreatedAt = 'CREATED_AT'
}

export type ApplicantCompanyNotesPaginator = {
    __typename?: 'ApplicantCompanyNotesPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantCompanyNotes>;
};

export type QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions = {
    column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
};

export enum QueryApplicantCompanyRiskLevelHistoryFilterStatic {
    ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
    RiskLevelId = 'RISK_LEVEL_ID'
}

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation>;
};

export enum QueryApplicantCompanyRiskLevelHistoryWhereColumn {
    RiskLevelId = 'RISK_LEVEL_ID'
}

export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
};

export type QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause = {
    column: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantCompanyRiskLevelHistoryOrderByColumn {
    Id = 'ID'
}

export type ApplicantCompanyRiskLevelHistoryPaginator = {
    __typename?: 'ApplicantCompanyRiskLevelHistoryPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantCompanyRiskLevelHistory>;
};

export type ApplicantCompanyRiskLevelHistory = {
    __typename?: 'ApplicantCompanyRiskLevelHistory';
    id: Scalars['ID'];
    comment: Scalars['String'];
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    applicant_company?: Maybe<ApplicantCompany>;
    manager?: Maybe<Members>;
    risk_level?: Maybe<ApplicantRiskLevel>;
};

export type QueryApplicantDocumentsFilterFilterConditions = {
    column?: InputMaybe<QueryApplicantDocumentsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
};

export enum QueryApplicantDocumentsFilterStatic {
    Id = 'ID',
    ApplicantId = 'APPLICANT_ID',
    DocumentTypeId = 'DOCUMENT_TYPE_ID',
    DocumentStateId = 'DOCUMENT_STATE_ID'
}

export type QueryApplicantDocumentsOrderByOrderByClause = {
    column: QueryApplicantDocumentsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantDocumentsOrderByColumn {
    Id = 'ID',
    CreatedAt = 'CREATED_AT'
}

export type ApplicantDocumentPaginator = {
    __typename?: 'ApplicantDocumentPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantDocument>;
};

export type ApplicantDocumentInternalNotePaginator = {
    __typename?: 'ApplicantDocumentInternalNotePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantDocumentInternalNote>;
};

export type QueryApplicantDocumentTagsFilterFilterConditions = {
    column?: InputMaybe<QueryApplicantDocumentTagsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
};

export enum QueryApplicantDocumentTagsFilterStatic {
    Name = 'NAME',
    HasCategoryFilterByName = 'HAS_CATEGORY_FILTER_BY_NAME'
}

export type QueryApplicantDocumentTagsOrderByOrderByClause = {
    column: QueryApplicantDocumentTagsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantDocumentTagsOrderByColumn {
    Id = 'ID',
    CreatedAt = 'CREATED_AT'
}

export type ApplicantDocumentTagPaginator = {
    __typename?: 'ApplicantDocumentTagPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantDocumentTag>;
};

export type ApplicantDocumentTagCategoryPaginator = {
    __typename?: 'ApplicantDocumentTagCategoryPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantDocumentTagCategory>;
};

export type QueryApplicantIndividualCompanyPositionsFilterFilterConditions = {
    column?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
};

export enum QueryApplicantIndividualCompanyPositionsFilterStatic {
    Name = 'NAME',
    CompanyId = 'COMPANY_ID'
}

export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
    column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
    Id = 'ID',
    Name = 'NAME',
    CompanyId = 'COMPANY_ID'
}

export type ApplicantIndividualCompanyPositionPaginator = {
    __typename?: 'ApplicantIndividualCompanyPositionPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantIndividualCompanyPosition>;
};

export type QueryApplicantIndividualCompanyRelationsFilterFilterConditions = {
    column?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
};

export enum QueryApplicantIndividualCompanyRelationsFilterStatic {
    Name = 'NAME',
    CompanyId = 'COMPANY_ID'
}

export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
    column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
    Id = 'ID',
    Name = 'NAME',
    CompanyId = 'COMPANY_ID'
}

export type ApplicantIndividualCompanyRelationPaginator = {
    __typename?: 'ApplicantIndividualCompanyRelationPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantIndividualCompanyRelation>;
};

export type QueryApplicantRiskLevelHistoryWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantRiskLevelHistoryWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation>;
};

export enum QueryApplicantRiskLevelHistoryWhereColumn {
    RiskLevelId = 'RISK_LEVEL_ID'
}

export type QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
};

export type QueryApplicantRiskLevelHistoryOrderByOrderByClause = {
    column: QueryApplicantRiskLevelHistoryOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantRiskLevelHistoryOrderByColumn {
    Id = 'ID'
}

export type ApplicantRiskLevelHistoryPaginator = {
    __typename?: 'ApplicantRiskLevelHistoryPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantRiskLevelHistory>;
};

export type ApplicantRiskLevelHistory = {
    __typename?: 'ApplicantRiskLevelHistory';
    id: Scalars['ID'];
    comment: Scalars['String'];
    created_at?: Maybe<Scalars['DateTimeUtc']>;
    applicant?: Maybe<ApplicantIndividual>;
    manager?: Maybe<Members>;
    risk_level?: Maybe<ApplicantRiskLevel>;
};

export type QueryApplicantKycLevelsWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantKycLevelsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditionsRelation>;
};

export enum QueryApplicantKycLevelsWhereColumn {
    Name = 'NAME'
}

export type QueryApplicantKycLevelsWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
};

export type QueryApplicantKycLevelsOrderByOrderByClause = {
    column: QueryApplicantKycLevelsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantKycLevelsOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type ApplicantKycLevelPaginator = {
    __typename?: 'ApplicantKycLevelPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantKycLevel>;
};

export type QueryApplicantIndividualLabelsAvailableOrderByOrderByClause = {
    column: QueryApplicantIndividualLabelsAvailableOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantIndividualLabelsAvailableOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type ApplicantIndividualLabelPaginator = {
    __typename?: 'ApplicantIndividualLabelPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantIndividualLabel>;
};

export type QueryApplicantModulesWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantModulesWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantModulesWhereWhereConditionsRelation>;
};

export enum QueryApplicantModulesWhereColumn {
    Name = 'NAME'
}

export type QueryApplicantModulesWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
};

export type QueryApplicantModulesOrderByOrderByClause = {
    column: QueryApplicantModulesOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantModulesOrderByColumn {
    Id = 'ID'
}

export type ApplicantModulesPaginator = {
    __typename?: 'ApplicantModulesPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantModules>;
};

export type QueryApplicantIndividualNotesOrderByOrderByClause = {
    column: QueryApplicantIndividualNotesOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantIndividualNotesOrderByColumn {
    Id = 'ID',
    CreatedAt = 'CREATED_AT'
}

export type ApplicantIndividualNotesPaginator = {
    __typename?: 'ApplicantIndividualNotesPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantIndividualNotes>;
};

export type QueryApplicantRiskLevelsWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantRiskLevelsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditionsRelation>;
};

export enum QueryApplicantRiskLevelsWhereColumn {
    Name = 'NAME'
}

export type QueryApplicantRiskLevelsWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
};

export type QueryApplicantRiskLevelsOrderByOrderByClause = {
    column: QueryApplicantRiskLevelsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantRiskLevelsOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type ApplicantRiskLevelPaginator = {
    __typename?: 'ApplicantRiskLevelPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantRiskLevel>;
};

export type QueryApplicantStatesWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantStatesWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantStatesWhereWhereConditionsRelation>;
};

export enum QueryApplicantStatesWhereColumn {
    Name = 'NAME'
}

export type QueryApplicantStatesWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
};

export type QueryApplicantStatesOrderByOrderByClause = {
    column: QueryApplicantStatesOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantStatesOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type ApplicantStatePaginator = {
    __typename?: 'ApplicantStatePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantState>;
};

export type QueryApplicantStateReasonsWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantStateReasonsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditionsRelation>;
};

export enum QueryApplicantStateReasonsWhereColumn {
    Name = 'NAME'
}

export type QueryApplicantStateReasonsWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
};

export type QueryApplicantStateReasonsOrderByOrderByClause = {
    column: QueryApplicantStateReasonsOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantStateReasonsOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type ApplicantStateReasonPaginator = {
    __typename?: 'ApplicantStateReasonPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantStateReason>;
};

export type QueryApplicantStatusesWhereWhereConditions = {
    column?: InputMaybe<QueryApplicantStatusesWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
    HAS?: InputMaybe<QueryApplicantStatusesWhereWhereConditionsRelation>;
};

export enum QueryApplicantStatusesWhereColumn {
    Name = 'NAME'
}

export type QueryApplicantStatusesWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
};

export type QueryApplicantStatusesOrderByOrderByClause = {
    column: QueryApplicantStatusesOrderByColumn;
    order: SortOrder;
};

export enum QueryApplicantStatusesOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type ApplicantStatusPaginator = {
    __typename?: 'ApplicantStatusPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<ApplicantStatus>;
};

export type QueryBankCorrespondentsFilterFilterConditions = {
    column?: InputMaybe<QueryBankCorrespondentsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
};

export enum QueryBankCorrespondentsFilterStatic {
    Name = 'NAME',
    HasBankCorrespondentCurrenciesFilterByCurrencyId = 'HAS_BANK_CORRESPONDENT_CURRENCIES_FILTER_BY_CURRENCY_ID',
    HasBankCorrespondentRegionsFilterByRegionId = 'HAS_BANK_CORRESPONDENT_REGIONS_FILTER_BY_REGION_ID'
}

export type QueryBankCorrespondentsOrderByOrderByClause = {
    column: QueryBankCorrespondentsOrderByColumn;
    order: SortOrder;
};

export enum QueryBankCorrespondentsOrderByColumn {
    Id = 'ID'
}

export type BankCorrespondentPaginator = {
    __typename?: 'BankCorrespondentPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<BankCorrespondent>;
};

export type QueryBusinessActivitiesFilterFilterConditions = {
    column?: InputMaybe<QueryBusinessActivitiesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
};

export enum QueryBusinessActivitiesFilterStatic {
    Id = 'ID',
    Name = 'NAME',
    HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID'
}

export type QueryBusinessActivitiesOrderByOrderByClause = {
    column: QueryBusinessActivitiesOrderByColumn;
    order: SortOrder;
};

export enum QueryBusinessActivitiesOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type BusinessActivityPaginator = {
    __typename?: 'BusinessActivityPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<BusinessActivity>;
};

export type QueryCommissionPriceListsFilterFilterConditions = {
    column?: InputMaybe<QueryCommissionPriceListsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
};

export enum QueryCommissionPriceListsFilterStatic {
    HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
    HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
    HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
    Id = 'ID',
    CompanyId = 'COMPANY_ID',
    RegionId = 'REGION_ID'
}

export type QueryCommissionPriceListsOrderByOrderByClause = {
    column: QueryCommissionPriceListsOrderByColumn;
    order: SortOrder;
};

export enum QueryCommissionPriceListsOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type CommissionPriceListPaginator = {
    __typename?: 'CommissionPriceListPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<CommissionPriceList>;
};

export type QueryCommissionTemplatesFilterFilterConditions = {
    column?: InputMaybe<QueryCommissionTemplatesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
};

export enum QueryCommissionTemplatesFilterStatic {
    Id = 'ID',
    Name = 'NAME',
    IsActive = 'IS_ACTIVE',
    HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
    HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
    HasBusinessActivityFilterById = 'HAS_BUSINESS_ACTIVITY_FILTER_BY_ID'
}

export type QueryCommissionTemplatesOrderByOrderByClause = {
    column: QueryCommissionTemplatesOrderByColumn;
    order: SortOrder;
};

export enum QueryCommissionTemplatesOrderByColumn {
    Id = 'ID',
    Name = 'NAME',
    IsActive = 'IS_ACTIVE',
    Description = 'DESCRIPTION'
}

export type CommissionTemplatePaginator = {
    __typename?: 'CommissionTemplatePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<CommissionTemplate>;
};

export type QueryCommissionTemplateLimitsFilterStatic = {
    commission_template_id?: InputMaybe<Scalars['ID']>;
    account_id?: InputMaybe<Scalars['ID']>;
    payment_system_id?: InputMaybe<Scalars['ID']>;
    region_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_type_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
    currency_id?: InputMaybe<Scalars['ID']>;
    amount?: InputMaybe<Scalars['Decimal']>;
    period_count?: InputMaybe<Scalars['Int']>;
};

export type CommissionTemplateLimitPaginator = {
    __typename?: 'CommissionTemplateLimitPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<CommissionTemplateLimit>;
};

export type QueryCommissionTemplateLimitActionTypesWhereWhereConditions = {
    column?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
    HAS?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation>;
};

export enum QueryCommissionTemplateLimitActionTypesWhereColumn {
    Name = 'NAME'
}

export type QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitActionTypesOrderByOrderByClause = {
    column: QueryCommissionTemplateLimitActionTypesOrderByColumn;
    order: SortOrder;
};

export enum QueryCommissionTemplateLimitActionTypesOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type CommissionTemplateLimitActionTypePaginator = {
    __typename?: 'CommissionTemplateLimitActionTypePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<CommissionTemplateLimitActionType>;
};

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditions = {
    column?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
    HAS?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation>;
};

export enum QueryCommissionTemplateLimitPeriodsWhereColumn {
    Name = 'NAME'
}

export type QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitPeriodsOrderByOrderByClause = {
    column: QueryCommissionTemplateLimitPeriodsOrderByColumn;
    order: SortOrder;
};

export enum QueryCommissionTemplateLimitPeriodsOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type CommissionTemplateLimitPeriodPaginator = {
    __typename?: 'CommissionTemplateLimitPeriodPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<CommissionTemplateLimitPeriod>;
};

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions = {
    column?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
    HAS?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation>;
};

export enum QueryCommissionTemplateLimitTransferDirectionsWhereColumn {
    Name = 'NAME'
}

export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause = {
    column: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
    order: SortOrder;
};

export enum QueryCommissionTemplateLimitTransferDirectionsOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type CommissionTemplateLimitTransferDirectionPaginator = {
    __typename?: 'CommissionTemplateLimitTransferDirectionPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<CommissionTemplateLimitTransferDirection>;
};

export type QueryCommissionTemplateLimitTypesWhereWhereConditions = {
    column?: InputMaybe<QueryCommissionTemplateLimitTypesWhereColumn>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
    OR?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
    HAS?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation>;
};

export enum QueryCommissionTemplateLimitTypesWhereColumn {
    Name = 'NAME'
}

export type QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
};

export type QueryCommissionTemplateLimitTypesOrderByOrderByClause = {
    column: QueryCommissionTemplateLimitTypesOrderByColumn;
    order: SortOrder;
};

export enum QueryCommissionTemplateLimitTypesOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type CommissionTemplateLimitTypePaginator = {
    __typename?: 'CommissionTemplateLimitTypePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<CommissionTemplateLimitType>;
};

export type QueryCompaniesFilterFilterConditions = {
    column?: InputMaybe<QueryCompaniesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
};

export enum QueryCompaniesFilterStatic {
    Name = 'NAME',
    Email = 'EMAIL',
    Url = 'URL',
    RegNumber = 'REG_NUMBER',
    EntityType = 'ENTITY_TYPE',
    CountryId = 'COUNTRY_ID',
    HasPaymentProvidersFilterById = 'HAS_PAYMENT_PROVIDERS_FILTER_BY_ID',
    HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
    HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID'
}

export type QueryCompaniesOrderByOrderByClause = {
    column: QueryCompaniesOrderByColumn;
    order: SortOrder;
};

export enum QueryCompaniesOrderByColumn {
    Id = 'ID',
    CreatedAt = 'CREATED_AT',
    Name = 'NAME',
    Email = 'EMAIL',
    Url = 'URL'
}

export type CompanyPaginator = {
    __typename?: 'CompanyPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Company>;
};

export type CountryPaginator = {
    __typename?: 'CountryPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Country>;
};

export type CurrenciesPaginator = {
    __typename?: 'CurrenciesPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Currencies>;
};

export type QueryDepartmentsFilterFilterConditions = {
    column?: InputMaybe<QueryDepartmentsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
};

export enum QueryDepartmentsFilterStatic {
    HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
    Name = 'NAME'
}

export type QueryDepartmentsOrderByOrderByClause = {
    column: QueryDepartmentsOrderByColumn;
    order: SortOrder;
};

export enum QueryDepartmentsOrderByColumn {
    Id = 'ID',
    Name = 'NAME'
}

export type DepartmentPaginator = {
    __typename?: 'DepartmentPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Department>;
};

export type QueryDepartmentPositionsFilterFilterConditions = {
    column?: InputMaybe<QueryDepartmentPositionsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
};

export enum QueryDepartmentPositionsFilterStatic {
    HasDepartmentFilterById = 'HAS_DEPARTMENT_FILTER_BY_ID',
    Name = 'NAME',
    IsActive = 'IS_ACTIVE'
}

export type QueryDepartmentPositionsOrderByOrderByClause = {
    column: QueryDepartmentPositionsOrderByColumn;
    order: SortOrder;
};

export enum QueryDepartmentPositionsOrderByColumn {
    Id = 'ID',
    Name = 'NAME',
    IsActive = 'IS_ACTIVE'
}

export type DepartmentPositionPaginator = {
    __typename?: 'DepartmentPositionPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<DepartmentPosition>;
};

export type QueryEmailNotificationsFilterFilterConditions = {
    column?: InputMaybe<QueryEmailNotificationsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
};

export enum QueryEmailNotificationsFilterStatic {
    CompanyId = 'COMPANY_ID',
    Type = 'TYPE',
    RecipientType = 'RECIPIENT_TYPE',
    HasApplicantIndividualMixedIdOrFullname = 'HAS_APPLICANT_INDIVIDUAL_MIXED_ID_OR_FULLNAME',
    HasApplicantCompanyMixedIdOrName = 'HAS_APPLICANT_COMPANY_MIXED_ID_OR_NAME',
    HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
    HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
    HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
    HasTemplatesFilterBySubject = 'HAS_TEMPLATES_FILTER_BY_SUBJECT'
}

export type QueryEmailNotificationsOrderByOrderByClause = {
    column: QueryEmailNotificationsOrderByColumn;
    order: SortOrder;
};

export enum QueryEmailNotificationsOrderByColumn {
    Id = 'ID'
}

export type EmailNotificationPaginator = {
    __typename?: 'EmailNotificationPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<EmailNotification>;
};

export type QueryFilesFilterFilterConditions = {
    column?: InputMaybe<QueryFilesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryFilesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryFilesFilterFilterConditions>>;
};

export enum QueryFilesFilterStatic {
    AuthorId = 'AUTHOR_ID',
    EntityType = 'ENTITY_TYPE'
}

export type QueryFilesOrderByOrderByClause = {
    column: QueryFilesOrderByColumn;
    order: SortOrder;
};

export enum QueryFilesOrderByColumn {
    Id = 'ID',
    AuthorId = 'AUTHOR_ID'
}

export type FilesPaginator = {
    __typename?: 'FilesPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Files>;
};

export enum GroupTypeMode {
    Clients = 'CLIENTS',
    All = 'ALL'
}

export type GroupTypePaginator = {
    __typename?: 'GroupTypePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<GroupType>;
};

export type QueryGroupsFilterFilterConditions = {
    column?: InputMaybe<QueryGroupsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
};

export enum QueryGroupsFilterStatic {
    Id = 'ID',
    CompanyId = 'COMPANY_ID',
    RoleId = 'ROLE_ID',
    Name = 'NAME',
    GroupTypeId = 'GROUP_TYPE_ID',
    IsActive = 'IS_ACTIVE'
}

export type QueryGroupsOrderByOrderByClause = {
    column: QueryGroupsOrderByColumn;
    order: SortOrder;
};

export enum QueryGroupsOrderByColumn {
    Id = 'ID',
    IsActive = 'IS_ACTIVE',
    Name = 'NAME'
}

export type GroupRolePaginator = {
    __typename?: 'GroupRolePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<GroupRole>;
};

export type QueryGroupListFilterFilterConditions = {
    column?: InputMaybe<QueryGroupListFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
};

export enum QueryGroupListFilterStatic {
    Id = 'ID',
    CompanyId = 'COMPANY_ID',
    Name = 'NAME',
    RoleId = 'ROLE_ID',
    GroupTypeId = 'GROUP_TYPE_ID',
    IsActive = 'IS_ACTIVE',
    ModuleId = 'MODULE_ID',
    CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
    PaymentProviderId = 'PAYMENT_PROVIDER_ID'
}

export type QueryGroupListOrderByOrderByClause = {
    column: QueryGroupListOrderByColumn;
    order: SortOrder;
};

export enum QueryGroupListOrderByColumn {
    Id = 'ID',
    IsActive = 'IS_ACTIVE',
    Name = 'NAME'
}

export type GroupRoleViewPaginator = {
    __typename?: 'GroupRoleViewPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<GroupRoleView>;
};

export type GroupRoleView = {
    __typename?: 'GroupRoleView';
    id: Scalars['ID'];
    name?: Maybe<Scalars['String']>;
    group_type_id?: Maybe<Scalars['ID']>;
    role_id?: Maybe<Scalars['ID']>;
    module_id?: Maybe<Scalars['ID']>;
    description?: Maybe<Scalars['String']>;
    is_active?: Maybe<Scalars['Boolean']>;
    group_type?: Maybe<GroupType>;
    role?: Maybe<Role>;
    commission_template_id?: Maybe<Scalars['ID']>;
    commission_template_name?: Maybe<Scalars['String']>;
    payment_provider_id?: Maybe<Scalars['ID']>;
    payment_provider_name?: Maybe<Scalars['String']>;
    company?: Maybe<Company>;
    module?: Maybe<Module>;
};

export type QueryMemberAccessLimitationsFilterFilterConditions = {
    column?: InputMaybe<QueryMemberAccessLimitationsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
};

export enum QueryMemberAccessLimitationsFilterStatic {
    DoesntHaveGroupRoles = 'DOESNT_HAVE_GROUP_ROLES',
    HasGroupRolesFilterById = 'HAS_GROUP_ROLES_FILTER_BY_ID',
    ModuleId = 'MODULE_ID',
    ProjectId = 'PROJECT_ID',
    PaymentProviderId = 'PAYMENT_PROVIDER_ID',
    GroupTypeId = 'GROUP_TYPE_ID'
}

export type QueryMemberAccessLimitationsOrderByOrderByClause = {
    column: QueryMemberAccessLimitationsOrderByColumn;
    order: SortOrder;
};

export enum QueryMemberAccessLimitationsOrderByColumn {
    Id = 'ID'
}

export type MemberAccessLimitationPaginator = {
    __typename?: 'MemberAccessLimitationPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<MemberAccessLimitation>;
};

export type QueryMembersFilterFilterConditions = {
    column?: InputMaybe<QueryMembersFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
};

export enum QueryMembersFilterStatic {
    HasGroupRoleFilterById = 'HAS_GROUP_ROLE_FILTER_BY_ID',
    HasRoleFilterById = 'HAS_ROLE_FILTER_BY_ID',
    Id = 'ID',
    Fullname = 'FULLNAME',
    CompanyId = 'COMPANY_ID',
    Email = 'EMAIL',
    DepartmentPositionId = 'DEPARTMENT_POSITION_ID',
    DepartmentId = 'DEPARTMENT_ID',
    LastLoginAt = 'LAST_LOGIN_AT',
    IsShowOwnerApplicants = 'IS_SHOW_OWNER_APPLICANTS',
    MemberStatusId = 'MEMBER_STATUS_ID'
}

export type QueryMembersOrderByOrderByClause = {
    column: QueryMembersOrderByColumn;
    order: SortOrder;
};

export enum QueryMembersOrderByColumn {
    Id = 'ID',
    Email = 'EMAIL',
    LastLoginAt = 'LAST_LOGIN_AT',
    IsActive = 'IS_ACTIVE'
}

export type MembersPaginator = {
    __typename?: 'MembersPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Members>;
};

export type QueryPaymentBanksFilterFilterConditions = {
    column?: InputMaybe<QueryPaymentBanksFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
};

export enum QueryPaymentBanksFilterStatic {
    Id = 'ID',
    CountryId = 'COUNTRY_ID',
    PaymentSystemId = 'PAYMENT_SYSTEM_ID',
    PaymentProviderId = 'PAYMENT_PROVIDER_ID',
    Name = 'NAME',
    Address = 'ADDRESS',
    BankCode = 'BANK_CODE',
    PaymentSystemCode = 'PAYMENT_SYSTEM_CODE'
}

export type QueryPaymentBankCondition = {
    country_id?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    bank_code?: InputMaybe<Scalars['String']>;
    payment_system_code?: InputMaybe<Scalars['String']>;
    payment_provider_id: Scalars['ID'];
    payment_system_id: Scalars['ID'];
};

export type QueryPaymentBanksOrderByOrderByClause = {
    column: QueryPaymentBanksOrderByColumn;
    order: SortOrder;
};

export enum QueryPaymentBanksOrderByColumn {
    Id = 'ID',
    Name = 'NAME',
    IsActive = 'IS_ACTIVE'
}

export type PaymentBankPaginator = {
    __typename?: 'PaymentBankPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<PaymentBank>;
};

export type QueryPaymentProvidersFilterFilterConditions = {
    column?: InputMaybe<QueryPaymentProvidersFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
};

export enum QueryPaymentProvidersFilterStatic {
    Name = 'NAME',
    HasPaymentSystemsFilterById = 'HAS_PAYMENT_SYSTEMS_FILTER_BY_ID',
    HasAccountFilterById = 'HAS_ACCOUNT_FILTER_BY_ID',
    HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
    CompanyId = 'COMPANY_ID',
    Id = 'ID'
}

export type QueryPaymentProvidersOrderByOrderByClause = {
    column: QueryPaymentProvidersOrderByColumn;
    order: SortOrder;
};

export enum QueryPaymentProvidersOrderByColumn {
    Id = 'ID',
    Name = 'NAME',
    IsActive = 'IS_ACTIVE'
}

export type PaymentProviderPaginator = {
    __typename?: 'PaymentProviderPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<PaymentProvider>;
};

export type QueryPaymentProviderIbansFilterFilterConditions = {
    column?: InputMaybe<QueryPaymentProviderIbansFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
};

export enum QueryPaymentProviderIbansFilterStatic {
    Name = 'NAME',
    CompanyId = 'COMPANY_ID',
    CurrencyId = 'CURRENCY_ID'
}

export type QueryPaymentProviderIbansOrderByOrderByClause = {
    column: QueryPaymentProviderIbansOrderByColumn;
    order: SortOrder;
};

export enum QueryPaymentProviderIbansOrderByColumn {
    Id = 'ID'
}

export type PaymentProviderIbanPaginator = {
    __typename?: 'PaymentProviderIbanPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<PaymentProviderIban>;
};

export type QueryPaymentSystemsFilterFilterConditions = {
    column?: InputMaybe<QueryPaymentSystemsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
};

export enum QueryPaymentSystemsFilterStatic {
    Id = 'ID',
    Name = 'NAME',
    HasProvidersFilterByName = 'HAS_PROVIDERS_FILTER_BY_NAME',
    HasProvidersFilterById = 'HAS_PROVIDERS_FILTER_BY_ID',
    HasCompaniesFilterById = 'HAS_COMPANIES_FILTER_BY_ID',
    HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID'
}

export type QueryPaymentSystemsOrderByOrderByClause = {
    column: QueryPaymentSystemsOrderByColumn;
    order: SortOrder;
};

export enum QueryPaymentSystemsOrderByColumn {
    Id = 'ID',
    Name = 'NAME',
    IsActive = 'IS_ACTIVE'
}

export type PaymentSystemPaginator = {
    __typename?: 'PaymentSystemPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<PaymentSystem>;
};

export type QueryPaymentsFilterFilterConditions = {
    column?: InputMaybe<QueryPaymentsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
};

export enum QueryPaymentsFilterStatic {
    Id = 'ID',
    CompanyId = 'COMPANY_ID',
    PaymentProviderId = 'PAYMENT_PROVIDER_ID',
    OperationTypeId = 'OPERATION_TYPE_ID',
    UrgencyId = 'URGENCY_ID',
    StatusId = 'STATUS_ID',
    SenderName = 'SENDER_NAME',
    HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER'
}

export type QueryPaymentsOrderByOrderByClause = {
    column: QueryPaymentsOrderByColumn;
    order: SortOrder;
};

export enum QueryPaymentsOrderByColumn {
    Id = 'ID',
    CreatedAt = 'CREATED_AT',
    Amount = 'AMOUNT',
    Fee = 'FEE',
    PaymentNumber = 'PAYMENT_NUMBER'
}

export type PaymentsPaginator = {
    __typename?: 'PaymentsPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Payments>;
};

export type QueryProjectsFilterFilterConditions = {
    column?: InputMaybe<QueryProjectsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
};

export enum QueryProjectsFilterStatic {
    Id = 'ID',
    CompanyId = 'COMPANY_ID',
    ModuleId = 'MODULE_ID'
}

export type ProjectPaginator = {
    __typename?: 'ProjectPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Project>;
};

export type QueryRegionsFilterFilterConditions = {
    column?: InputMaybe<QueryRegionsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
};

export enum QueryRegionsFilterStatic {
    CompanyId = 'COMPANY_ID',
    HasCountriesFilterById = 'HAS_COUNTRIES_FILTER_BY_ID',
    HasCountriesFilterByName = 'HAS_COUNTRIES_FILTER_BY_NAME',
    HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME'
}

export type RegionPaginator = {
    __typename?: 'RegionPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Region>;
};

export type QueryRolesFilterFilterConditions = {
    column?: InputMaybe<QueryRolesFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
};

export enum QueryRolesFilterStatic {
    Name = 'NAME',
    CompanyId = 'COMPANY_ID',
    HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
    HasGroupsMixedIdOrName = 'HAS_GROUPS_MIXED_ID_OR_NAME'
}

export type QueryRolesOrderByOrderByClause = {
    column: QueryRolesOrderByColumn;
    order: SortOrder;
};

export enum QueryRolesOrderByColumn {
    Id = 'ID',
    Name = 'NAME',
    Description = 'DESCRIPTION'
}

export type RolePaginator = {
    __typename?: 'RolePaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Role>;
};

export type QueryTicketsFilterFilterConditions = {
    column?: InputMaybe<QueryTicketsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryTicketsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryTicketsFilterFilterConditions>>;
};

export enum QueryTicketsFilterStatic {
    Id = 'ID',
    MemberId = 'MEMBER_ID',
    ClientId = 'CLIENT_ID',
    HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID'
}

export type QueryTicketsOrderByRelationOrderByClause = {
    column?: InputMaybe<QueryTicketsOrderByColumn>;
    order: SortOrder;
    company?: InputMaybe<QueryTicketsOrderByCompany>;
    department?: InputMaybe<QueryTicketsOrderByDepartment>;
};

export enum QueryTicketsOrderByColumn {
    Id = 'ID'
}

export type QueryTicketsOrderByCompany = {
    aggregate: OrderByRelationAggregateFunction;
};

export enum OrderByRelationAggregateFunction {
    Count = 'COUNT'
}

export type QueryTicketsOrderByDepartment = {
    aggregate: OrderByRelationAggregateFunction;
};

export type TicketPaginator = {
    __typename?: 'TicketPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Ticket>;
};

export type QueryTransferIncomingsFilterFilterConditions = {
    column?: InputMaybe<QueryTransferIncomingsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
};

export enum QueryTransferIncomingsFilterStatic {
    Id = 'ID',
    UrgencyId = 'URGENCY_ID',
    OperationTypeId = 'OPERATION_TYPE_ID',
    SenderName = 'SENDER_NAME',
    StatusId = 'STATUS_ID',
    HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
    HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
    HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT'
}

export type TransferIncomingPaginator = {
    __typename?: 'TransferIncomingPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<TransferIncoming>;
};

export type TransferIncomingHistoryPaginator = {
    __typename?: 'TransferIncomingHistoryPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<TransferIncomingHistory>;
};

export type TransferIncomingHistory = {
    __typename?: 'TransferIncomingHistory';
    id: Scalars['ID'];
    status?: Maybe<PaymentStatus>;
    action?: Maybe<Scalars['String']>;
    comment?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type QueryTransferOutgoingsFilterFilterConditions = {
    column?: InputMaybe<QueryTransferOutgoingsFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
};

export enum QueryTransferOutgoingsFilterStatic {
    Id = 'ID',
    UrgencyId = 'URGENCY_ID',
    OperationTypeId = 'OPERATION_TYPE_ID',
    StatusId = 'STATUS_ID',
    RecipientName = 'RECIPIENT_NAME',
    UserType = 'USER_TYPE',
    HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
    HasSenderMixedNameOrFullname = 'HAS_SENDER_MIXED_NAME_OR_FULLNAME',
    HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
    HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT'
}

export type TransferOutgoingPaginator = {
    __typename?: 'TransferOutgoingPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<TransferOutgoing>;
};

export type TransferOutgoingHistoryPaginator = {
    __typename?: 'TransferOutgoingHistoryPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<TransferOutgoingHistory>;
};

export type TransferOutgoingHistory = {
    __typename?: 'TransferOutgoingHistory';
    id: Scalars['ID'];
    status?: Maybe<PaymentStatus>;
    action?: Maybe<Scalars['String']>;
    comment?: Maybe<Scalars['String']>;
    created_at?: Maybe<Scalars['DateTimeUtc']>;
};

export type TwoFactorAuthSettingsPaginator = {
    __typename?: 'TwoFactorAuthSettingsPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<TwoFactorAuthSettings>;
};

export type QueryUsersFilterFilterConditions = {
    column?: InputMaybe<QueryUsersFilterStatic>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
    OR?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
};

export enum QueryUsersFilterStatic {
    Id = 'ID',
    Fullname = 'FULLNAME',
    CompanyId = 'COMPANY_ID',
    Email = 'EMAIL',
    GroupId = 'GROUP_ID',
    GroupTypeId = 'GROUP_TYPE_ID',
    RoleId = 'ROLE_ID'
}

export type QueryUsersOrderByOrderByClause = {
    column: QueryUsersOrderByColumn;
    order: SortOrder;
};

export enum QueryUsersOrderByColumn {
    Id = 'ID',
    Email = 'EMAIL',
    Fullname = 'FULLNAME'
}

export type UsersPaginator = {
    __typename?: 'UsersPaginator';
    paginatorInfo: PaginatorInfo;
    data: Array<Users>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createAccountLimit?: Maybe<AccountLimit>;
    updateAccountLimit?: Maybe<AccountLimit>;
    deleteAccountLimit?: Maybe<AccountLimit>;
    createAccount: Array<Account>;
    updateAccount?: Maybe<Account>;
    deleteAccount?: Maybe<Account>;
    generateIban: AccountGenerateIbanResponse;
    updateActiveSession: ActiveSessionMutatorResponse;
    createApplicantIndividual?: Maybe<ApplicantIndividual>;
    updateApplicantIndividual?: Maybe<ApplicantIndividual>;
    updateApplicantIndividualVerificationStatus?: Maybe<ApplicantIndividual>;
    setApplicantIndividualPassword?: Maybe<ApplicantIndividual>;
    setApplicantSecurityPin?: Maybe<ApplicantIndividual>;
    deleteApplicantIndividual?: Maybe<ApplicantIndividual>;
    sendEmailVerification?: Maybe<ApplicantIndividual>;
    sendPhoneVerification?: Maybe<ApplicantIndividual>;
    sendEmailResetPassword?: Maybe<ApplicantIndividual>;
    sendEmailRegistation?: Maybe<ApplicantIndividual>;
    createApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
    updateApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
    deleteApplicantBankingMember?: Maybe<ApplicantBankingAccess>;
    grantApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
    deleteApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
    createApplicantCompany?: Maybe<ApplicantCompany>;
    updateApplicantCompany?: Maybe<ApplicantCompany>;
    deleteApplicantCompany?: Maybe<ApplicantCompany>;
    updateApplicantCompanyVerificationStatus?: Maybe<ApplicantCompany>;
    createApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
    updateApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
    deleteApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
    sendEmailVerificationApplicantCompany?: Maybe<ApplicantCompany>;
    sendPhoneVerificationApplicantCompany?: Maybe<ApplicantCompany>;
    createApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
    updateApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
    createApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
    updateApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
    deleteApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
    attachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
    detachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
    createApplicantCompanyModule?: Maybe<ApplicantCompany>;
    updateApplicantCompanyModule?: Maybe<ApplicantCompany>;
    deleteApplicantCompanyModule?: Maybe<ApplicantCompany>;
    createApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
    deleteApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
    createApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
    deleteApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
    createApplicantDocument?: Maybe<ApplicantDocument>;
    updateApplicantDocument?: Maybe<ApplicantDocument>;
    deleteApplicantDocument?: Maybe<ApplicantDocument>;
    attachApplicantDocumentTag?: Maybe<ApplicantDocument>;
    detachApplicantDocumentTag?: Maybe<ApplicantDocument>;
    createApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
    deleteApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
    createApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
    deleteTagApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
    deleteApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
    createApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
    updateApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
    deleteApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
    createApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
    updateApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
    deleteApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
    createApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
    updateApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
    deleteApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
    createApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
    updateApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
    deleteApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
    createApplicantIndividualModule?: Maybe<ApplicantIndividual>;
    updateApplicantIndividualModule?: Maybe<ApplicantIndividual>;
    deleteApplicantIndividualModule?: Maybe<ApplicantIndividual>;
    createApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
    deleteApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
    createApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
    updateApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
    deleteApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
    attachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
    detachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
    createApplicantModule?: Maybe<ApplicantModules>;
    createApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
    deleteApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
    createApplicantStateReason?: Maybe<ApplicantStateReason>;
    updateApplicantStateReason?: Maybe<ApplicantStateReason>;
    deleteApplicantStateReason?: Maybe<ApplicantStateReason>;
    createBankCorrespondent?: Maybe<BankCorrespondent>;
    updateBankCorrespondent?: Maybe<BankCorrespondent>;
    deleteBankCorrespondent?: Maybe<BankCorrespondent>;
    createBusinessActivity?: Maybe<BusinessActivity>;
    updateBusinessActivity?: Maybe<BusinessActivity>;
    createCommissionPriceList?: Maybe<CommissionPriceList>;
    updateCommissionPriceList?: Maybe<CommissionPriceList>;
    deleteCommissionPriceList?: Maybe<CommissionPriceList>;
    createCommissionTemplate?: Maybe<CommissionTemplate>;
    updateCommissionTemplate?: Maybe<CommissionTemplate>;
    deleteCommissionTemplate?: Maybe<CommissionTemplate>;
    createCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
    updateCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
    deleteCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
    createCompany?: Maybe<Company>;
    updateCompany?: Maybe<Company>;
    deleteCompany?: Maybe<Company>;
    addCompanyModule?: Maybe<Company>;
    updateCompanyModule?: Maybe<CompanyModule>;
    deleteCompanyModule?: Maybe<Company>;
    createCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
    updateCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
    deleteCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
    createCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
    updateCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
    deleteCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
    createDepartment?: Maybe<Department>;
    updateDepartment?: Maybe<Department>;
    createDepartmentPosition?: Maybe<DepartmentPosition>;
    deleteDepartment?: Maybe<Department>;
    deleteDepartmentPosition?: Maybe<DepartmentPosition>;
    createDocumentType?: Maybe<DocumentType>;
    deleteDocumentType?: Maybe<DocumentType>;
    createEmailNotification?: Maybe<EmailNotification>;
    updateEmailNotification?: Maybe<EmailNotification>;
    deleteEmailNotification?: Maybe<EmailNotification>;
    createEmailSmtp?: Maybe<EmailSmtp>;
    updateEmailSmtp?: Maybe<EmailSmtp>;
    deleteEmailSmtp: Array<EmailSmtp>;
    sendEmail?: Maybe<StatusType>;
    createEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
    updateEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
    deleteEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
    createEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
    updateEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
    deleteEmailTemplate?: Maybe<EmailTemplate>;
    sendEmailWithTemplate?: Maybe<StatusType>;
    deleteFile?: Maybe<Files>;
    createGroupSettings?: Maybe<GroupRole>;
    updateGroupSettings?: Maybe<GroupRole>;
    deleteGroup?: Maybe<GroupRole>;
    setMemberGroup?: Maybe<GroupRole>;
    createMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
    updateMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
    deleteMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
    updateMemberProfile?: Maybe<MemberProfile>;
    sendConfirmChangeEmail?: Maybe<StatusType>;
    createMember?: Maybe<Members>;
    updateMember?: Maybe<Members>;
    setMemberSuspended?: Maybe<Members>;
    setMemberInactive?: Maybe<Members>;
    setMemberActive?: Maybe<Members>;
    setMemberPassword?: Maybe<Members>;
    setMemberSecurityPin?: Maybe<Members>;
    sendMemberEmailVerification?: Maybe<Members>;
    resetMemberPassword?: Maybe<Members>;
    deleteMember?: Maybe<Members>;
    createModule?: Maybe<Module>;
    createPaymentBank?: Maybe<PaymentBank>;
    updatePaymentBank?: Maybe<PaymentBank>;
    deletePaymentBank?: Maybe<PaymentBank>;
    createPaymentProvider?: Maybe<PaymentProvider>;
    updatePaymentProvider?: Maybe<PaymentProvider>;
    deletePaymentProvider?: Maybe<PaymentProvider>;
    createPaymentProviderIban?: Maybe<PaymentProviderIban>;
    updatePaymentProviderIban?: Maybe<PaymentProviderIban>;
    deletePaymentProviderIban?: Maybe<PaymentProviderIban>;
    createPaymentSystem?: Maybe<PaymentSystem>;
    updatePaymentSystem?: Maybe<PaymentSystem>;
    deletePaymentSystem?: Maybe<PaymentSystem>;
    createPayment?: Maybe<Payments>;
    updatePayment?: Maybe<Payments>;
    deletePayment?: Maybe<Payments>;
    createPriceListFees?: Maybe<PriceListFee>;
    updatePriceListFees?: Maybe<PriceListFee>;
    deletePriceListFees?: Maybe<PriceListFee>;
    createProject?: Maybe<Project>;
    updateProject?: Maybe<Project>;
    deleteProject?: Maybe<Project>;
    updateProjectApiSetting: Array<ProjectApiSetting>;
    createRegion?: Maybe<Region>;
    updateRegion?: Maybe<Region>;
    deleteRegion?: Maybe<Region>;
    createRole?: Maybe<Role>;
    updateRole?: Maybe<Role>;
    deleteRole?: Maybe<Role>;
    createTicketComment?: Maybe<TicketComments>;
    createTicket?: Maybe<Ticket>;
    updateTicket?: Maybe<Ticket>;
    createTransferOutgoing?: Maybe<TransferOutgoing>;
    updateTransferOutgoing?: Maybe<TransferOutgoing>;
    createTransferOutgoingFee?: Maybe<TransferOutgoing>;
    updateTransferOutgoingFee?: Maybe<TransferOutgoing>;
    cancelTransferOutgoingFee?: Maybe<TransferOutgoing>;
    createApplicant?: Maybe<ApplicantSettingsProfile>;
    updateApplicantAccount: ApplicantAccount;
    updateApplicantDevice: TwoFactorAuthToken;
    updateApplicantDeviceWithOtp: ApplicantDevice;
    deleteApplicantDevice?: Maybe<ApplicantDevice>;
    updateApplicantProfile?: Maybe<ApplicantProfile>;
    setApplicantSettingsPassword?: Maybe<TwoFactorAuthToken>;
    setApplicantSettingsPasswordWithOtp?: Maybe<ApplicantSettingsProfile>;
};


export type MutationCreateAccountLimitArgs = {
    account_id: Scalars['ID'];
    commission_template_limit_type_id: Scalars['ID'];
    commission_template_limit_transfer_direction_id: Scalars['ID'];
    amount: Scalars['Decimal'];
    currency_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_period_id: Scalars['ID'];
    commission_template_limit_action_type_id: Scalars['ID'];
    period_count?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateAccountLimitArgs = {
    id: Scalars['ID'];
    commission_template_limit_type_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']>;
    amount?: InputMaybe<Scalars['Decimal']>;
    currency_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
    period_count?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteAccountLimitArgs = {
    id: Scalars['ID'];
};


export type MutationCreateAccountArgs = {
    input: InputAccount;
};


export type MutationUpdateAccountArgs = {
    id: Scalars['ID'];
    account_name: Scalars['String'];
    account_state_id: Scalars['ID'];
    is_primary: Scalars['Boolean'];
};


export type MutationDeleteAccountArgs = {
    id: Scalars['ID'];
};


export type MutationGenerateIbanArgs = {
    id: Scalars['ID'];
};


export type MutationUpdateActiveSessionArgs = {
    id: Scalars['String'];
    trusted: Scalars['Boolean'];
};


export type MutationCreateApplicantIndividualArgs = {
    first_name: Scalars['String'];
    last_name: Scalars['String'];
    email: Scalars['EMAIL'];
    phone: Scalars['String'];
    company_id: Scalars['ID'];
    photo_id?: InputMaybe<Scalars['ID']>;
    module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    project_id?: InputMaybe<Scalars['ID']>;
    group_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateApplicantIndividualArgs = {
    id: Scalars['ID'];
    first_name?: InputMaybe<Scalars['String']>;
    last_name?: InputMaybe<Scalars['String']>;
    middle_name?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['EMAIL']>;
    url?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    is_verification_phone?: InputMaybe<Scalars['Boolean']>;
    country_id?: InputMaybe<Scalars['ID']>;
    language_id?: InputMaybe<Scalars['ID']>;
    citizenship_country_id?: InputMaybe<Scalars['ID']>;
    state?: InputMaybe<Scalars['String']>;
    city?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    zip?: InputMaybe<Scalars['String']>;
    nationality?: InputMaybe<Scalars['String']>;
    birth_country_id?: InputMaybe<Scalars['ID']>;
    birth_state?: InputMaybe<Scalars['String']>;
    birth_city?: InputMaybe<Scalars['String']>;
    birth_at?: InputMaybe<Scalars['Date']>;
    sex?: InputMaybe<Sex>;
    profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    personal_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    address_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    applicant_state_id?: InputMaybe<Scalars['ID']>;
    applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
    applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
    account_manager_member_id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    group_id?: InputMaybe<Scalars['ID']>;
    module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    project_id?: InputMaybe<Scalars['ID']>;
    two_factor_auth_setting_id?: InputMaybe<Scalars['ID']>;
    password?: InputMaybe<Scalars['String']>;
    password_confirmation?: InputMaybe<Scalars['String']>;
    ip_address?: InputMaybe<Scalars['String']>;
    photo_id?: InputMaybe<Scalars['ID']>;
    kyc_level_id?: InputMaybe<Scalars['ID']>;
    last_screened_at?: InputMaybe<Scalars['DateTimeUtc']>;
};


export type MutationUpdateApplicantIndividualVerificationStatusArgs = {
    id: Scalars['ID'];
    applicant_status_id: Scalars['ID'];
};


export type MutationSetApplicantIndividualPasswordArgs = {
    id: Scalars['ID'];
    password: Scalars['String'];
    password_confirmation: Scalars['String'];
};


export type MutationSetApplicantSecurityPinArgs = {
    id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualArgs = {
    id: Scalars['ID'];
};


export type MutationSendEmailVerificationArgs = {
    applicant_id: Scalars['ID'];
};


export type MutationSendPhoneVerificationArgs = {
    applicant_id: Scalars['ID'];
};


export type MutationSendEmailResetPasswordArgs = {
    applicant_id: Scalars['ID'];
    email?: InputMaybe<Scalars['String']>;
};


export type MutationSendEmailRegistationArgs = {
    applicant_id: Scalars['ID'];
    email?: InputMaybe<Scalars['String']>;
};


export type MutationCreateApplicantBankingAccessArgs = {
    applicant_individual_id: Scalars['ID'];
    applicant_company_id: Scalars['ID'];
    role_id: Scalars['ID'];
    contact_administrator: Scalars['Boolean'];
    daily_limit: Scalars['Decimal'];
    monthly_limit: Scalars['Decimal'];
    operation_limit: Scalars['Decimal'];
    used_limit?: InputMaybe<Scalars['Decimal']>;
};


export type MutationUpdateApplicantBankingAccessArgs = {
    id: Scalars['ID'];
    applicant_individual_id?: InputMaybe<Scalars['ID']>;
    applicant_company_id?: InputMaybe<Scalars['ID']>;
    role_id?: InputMaybe<Scalars['ID']>;
    contact_administrator?: InputMaybe<Scalars['Boolean']>;
    daily_limit?: InputMaybe<Scalars['Decimal']>;
    monthly_limit?: InputMaybe<Scalars['Decimal']>;
    operation_limit?: InputMaybe<Scalars['Decimal']>;
};


export type MutationDeleteApplicantBankingMemberArgs = {
    id: Scalars['ID'];
};


export type MutationGrantApplicantBankingAccessArgs = {
    id: Scalars['ID'];
};


export type MutationDeleteApplicantBankingAccessArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantCompanyArgs = {
    name: Scalars['String'];
    email: Scalars['EMAIL'];
    phone?: InputMaybe<Scalars['String']>;
    company_id: Scalars['ID'];
    module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    group_id?: InputMaybe<Scalars['ID']>;
    project_id: Scalars['ID'];
    owner_id?: InputMaybe<Scalars['ID']>;
    owner_relation_id?: InputMaybe<Scalars['ID']>;
    owner_position_id?: InputMaybe<Scalars['ID']>;
    photo_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateApplicantCompanyArgs = {
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['EMAIL']>;
    url?: InputMaybe<Scalars['String']>;
    phone?: InputMaybe<Scalars['String']>;
    is_verification_phone?: InputMaybe<Scalars['Boolean']>;
    country_id?: InputMaybe<Scalars['ID']>;
    language_id?: InputMaybe<Scalars['ID']>;
    state?: InputMaybe<Scalars['String']>;
    city?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    address2?: InputMaybe<Scalars['String']>;
    office_address?: InputMaybe<Scalars['String']>;
    zip?: InputMaybe<Scalars['String']>;
    reg_at?: InputMaybe<Scalars['Date']>;
    expires_at?: InputMaybe<Scalars['DateTimeUtc']>;
    tax?: InputMaybe<Scalars['String']>;
    reg_number?: InputMaybe<Scalars['String']>;
    license_number?: InputMaybe<Scalars['String']>;
    company_type?: InputMaybe<Scalars['String']>;
    company_info_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    applicant_company_business_type_id?: InputMaybe<Scalars['ID']>;
    applicant_state_id?: InputMaybe<Scalars['ID']>;
    applicant_state_reason_id?: InputMaybe<Scalars['ID']>;
    applicant_risk_level_id?: InputMaybe<Scalars['ID']>;
    applicant_kyc_level_id?: InputMaybe<Scalars['ID']>;
    account_manager_member_id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    owner_id?: InputMaybe<Scalars['ID']>;
    owner_relation_id?: InputMaybe<Scalars['ID']>;
    owner_position_id?: InputMaybe<Scalars['ID']>;
    labels?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    group_id?: InputMaybe<Scalars['ID']>;
    module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    project_id?: InputMaybe<Scalars['ID']>;
    photo_id?: InputMaybe<Scalars['ID']>;
    incorporate_date?: InputMaybe<Scalars['DateTimeUtc']>;
    basic_info_additional_field?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    contact_email?: InputMaybe<Scalars['EMAIL']>;
    contact_phone?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteApplicantCompanyArgs = {
    id: Scalars['ID'];
};


export type MutationUpdateApplicantCompanyVerificationStatusArgs = {
    id: Scalars['ID'];
    applicant_status_id: Scalars['ID'];
};


export type MutationCreateApplicantIndividualCompanyArgs = {
    applicant_id: Scalars['ID'];
    applicant_company_id: Scalars['ID'];
    applicant_individual_company_relation_id: Scalars['ID'];
    applicant_individual_company_position_id: Scalars['ID'];
    percentage_owned?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdateApplicantIndividualCompanyArgs = {
    applicant_id: Scalars['ID'];
    applicant_company_id: Scalars['ID'];
    applicant_individual_company_relation_id?: InputMaybe<Scalars['ID']>;
    applicant_individual_company_position_id?: InputMaybe<Scalars['ID']>;
    percentage_owned?: InputMaybe<Scalars['Float']>;
};


export type MutationDeleteApplicantIndividualCompanyArgs = {
    applicant_id: Scalars['ID'];
    applicant_company_id: Scalars['ID'];
};


export type MutationSendEmailVerificationApplicantCompanyArgs = {
    applicant_company_id: Scalars['ID'];
};


export type MutationSendPhoneVerificationApplicantCompanyArgs = {
    applicant_company_id: Scalars['ID'];
};


export type MutationCreateApplicantCompanyBusinessTypeArgs = {
    name: Scalars['String'];
};


export type MutationUpdateApplicantCompanyBusinessTypeArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
};


export type MutationCreateApplicantCompanyLabelArgs = {
    name: Scalars['String'];
    hex_color_code: Scalars['String'];
};


export type MutationUpdateApplicantCompanyLabelArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
    hex_color_code?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteApplicantCompanyLabelArgs = {
    id: Scalars['ID'];
    deleteAnyway?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAttachApplicantCompanyLabelArgs = {
    applicant_company_id: Scalars['ID'];
    applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDetachApplicantCompanyLabelArgs = {
    applicant_company_id: Scalars['ID'];
    applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateApplicantCompanyModuleArgs = {
    applicant_company_id: Scalars['ID'];
    module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateApplicantCompanyModuleArgs = {
    applicant_company_id: Scalars['ID'];
    module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteApplicantCompanyModuleArgs = {
    applicant_company_id: Scalars['ID'];
    module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateApplicantCompanyNoteArgs = {
    note: Scalars['String'];
    applicant_company_id: Scalars['ID'];
    member_id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyNoteArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantCompanyRiskLevelHistoryArgs = {
    comment: Scalars['String'];
    applicant_company_id: Scalars['ID'];
    risk_level_id: Scalars['ID'];
};


export type MutationDeleteApplicantCompanyRiskLevelHistoryArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantDocumentArgs = {
    company_id: Scalars['ID'];
    applicant_id: Scalars['ID'];
    applicant_type: ApplicantType;
    document_type_id: Scalars['ID'];
    document_state_id?: InputMaybe<Scalars['ID']>;
    file_id: Scalars['ID'];
    country_id?: InputMaybe<Scalars['ID']>;
    added_from?: InputMaybe<Scalars['String']>;
    info?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantDocumentArgs = {
    id: Scalars['ID'];
    document_state_id?: InputMaybe<Scalars['ID']>;
    info?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteApplicantDocumentArgs = {
    id: Scalars['ID'];
};


export type MutationAttachApplicantDocumentTagArgs = {
    applicant_document_id: Scalars['ID'];
    applicant_document_tag_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationDetachApplicantDocumentTagArgs = {
    applicant_document_id: Scalars['ID'];
    applicant_document_tag_id: Array<InputMaybe<Scalars['ID']>>;
};


export type MutationCreateApplicantDocumentInternalNoteArgs = {
    applicant_document_id: Scalars['ID'];
    note: Scalars['String'];
};


export type MutationDeleteApplicantDocumentInternalNoteArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantDocumentRejectDetailArgs = {
    applicant_document_id: Scalars['ID'];
    applicant_document_tag_id: Array<Scalars['ID']>;
};


export type MutationDeleteTagApplicantDocumentRejectDetailArgs = {
    id: Scalars['ID'];
    applicant_document_tag_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteApplicantDocumentRejectDetailArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantDocumentTagArgs = {
    category_id: Scalars['ID'];
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateApplicantDocumentTagArgs = {
    id: Scalars['ID'];
    category_id: Scalars['ID'];
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteApplicantDocumentTagArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantDocumentTagCategoryArgs = {
    name: Scalars['String'];
};


export type MutationUpdateApplicantDocumentTagCategoryArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
};


export type MutationDeleteApplicantDocumentTagCategoryArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantIndividualCompanyPositionArgs = {
    name: Scalars['String'];
    company_id: Scalars['ID'];
};


export type MutationUpdateApplicantIndividualCompanyPositionArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
    company_id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteApplicantIndividualCompanyPositionArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantIndividualCompanyRelationArgs = {
    name: Scalars['String'];
    company_id: Scalars['ID'];
};


export type MutationUpdateApplicantIndividualCompanyRelationArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
    company_id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteApplicantIndividualCompanyRelationArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantIndividualModuleArgs = {
    applicant_individual_id: Scalars['ID'];
    module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateApplicantIndividualModuleArgs = {
    applicant_individual_id: Scalars['ID'];
    module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteApplicantIndividualModuleArgs = {
    applicant_individual_id: Scalars['ID'];
    module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateApplicantRiskLevelHistoryArgs = {
    comment: Scalars['String'];
    applicant_id: Scalars['ID'];
    risk_level_id: Scalars['ID'];
};


export type MutationDeleteApplicantRiskLevelHistoryArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantIndividualLabelArgs = {
    name: Scalars['String'];
    hex_color_code: Scalars['String'];
};


export type MutationUpdateApplicantIndividualLabelArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
    hex_color_code?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteApplicantIndividualLabelArgs = {
    id: Scalars['ID'];
    deleteAnyway?: InputMaybe<Scalars['Boolean']>;
};


export type MutationAttachApplicantIndividualLabelArgs = {
    applicant_individual_id: Scalars['ID'];
    applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDetachApplicantIndividualLabelArgs = {
    applicant_individual_id: Scalars['ID'];
    applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateApplicantModuleArgs = {
    name: Scalars['String'];
};


export type MutationCreateApplicantIndividualNoteArgs = {
    note: Scalars['String'];
    applicant_individual_id: Scalars['ID'];
    member_id: Scalars['ID'];
};


export type MutationDeleteApplicantIndividualNoteArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantStateReasonArgs = {
    name: Scalars['String'];
};


export type MutationUpdateApplicantStateReasonArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
};


export type MutationDeleteApplicantStateReasonArgs = {
    id: Scalars['ID'];
};


export type MutationCreateBankCorrespondentArgs = {
    name: Scalars['String'];
    address: Scalars['String'];
    bank_code: Scalars['String'];
    bank_account: Scalars['String'];
    payment_system_id: Scalars['ID'];
    currency_id: Array<InputMaybe<Scalars['ID']>>;
    region_id: Array<InputMaybe<Scalars['ID']>>;
    is_active: Scalars['Boolean'];
};


export type MutationUpdateBankCorrespondentArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
    address: Scalars['String'];
    bank_code: Scalars['String'];
    bank_account: Scalars['String'];
    payment_system_id: Scalars['ID'];
    currency_id: Array<InputMaybe<Scalars['ID']>>;
    region_id: Array<InputMaybe<Scalars['ID']>>;
    is_active: Scalars['Boolean'];
};


export type MutationDeleteBankCorrespondentArgs = {
    id: Scalars['ID'];
};


export type MutationCreateBusinessActivityArgs = {
    name: Scalars['String'];
};


export type MutationUpdateBusinessActivityArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
};


export type MutationCreateCommissionPriceListArgs = {
    name: Scalars['String'];
    provider_id: Scalars['ID'];
    payment_system_id: Scalars['ID'];
    commission_template_id: Scalars['ID'];
    region_id: Scalars['ID'];
    company_id: Scalars['ID'];
};


export type MutationUpdateCommissionPriceListArgs = {
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    provider_id?: InputMaybe<Scalars['ID']>;
    payment_system_id?: InputMaybe<Scalars['ID']>;
    commission_template_id?: InputMaybe<Scalars['ID']>;
    region_id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteCommissionPriceListArgs = {
    id: Scalars['ID'];
};


export type MutationCreateCommissionTemplateArgs = {
    input: InputCommissionTemplate;
};


export type MutationUpdateCommissionTemplateArgs = {
    id: Scalars['ID'];
    input: InputCommissionTemplate;
};


export type MutationDeleteCommissionTemplateArgs = {
    id: Scalars['ID'];
};


export type MutationCreateCommissionTemplateLimitArgs = {
    input: InputCommissionTemplateLimit;
};


export type MutationUpdateCommissionTemplateLimitArgs = {
    id: Scalars['ID'];
    input: InputCommissionTemplateLimit;
};


export type MutationDeleteCommissionTemplateLimitArgs = {
    id: Scalars['ID'];
};


export type MutationCreateCompanyArgs = {
    name: Scalars['String'];
    email: Scalars['EMAIL'];
    url: Scalars['String'];
    country_id: Scalars['ID'];
    phone?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateCompanyArgs = {
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['EMAIL']>;
    url?: InputMaybe<Scalars['String']>;
    zip?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    city?: InputMaybe<Scalars['String']>;
    company_number?: InputMaybe<Scalars['String']>;
    country_id?: InputMaybe<Scalars['ID']>;
    contact_name?: InputMaybe<Scalars['String']>;
    additional_fields_info?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    additional_fields_data?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    phone?: InputMaybe<Scalars['String']>;
    reg_address?: InputMaybe<Scalars['String']>;
    tax_id?: InputMaybe<Scalars['String']>;
    incorporate_date?: InputMaybe<Scalars['DateTimeUtc']>;
    employees_id?: InputMaybe<Scalars['ID']>;
    type_of_industry_id?: InputMaybe<Scalars['ID']>;
    license_number?: InputMaybe<Scalars['String']>;
    exp_date?: InputMaybe<Scalars['DateTimeUtc']>;
    state_id?: InputMaybe<Scalars['ID']>;
    state_reason_id?: InputMaybe<Scalars['ID']>;
    reg_number?: InputMaybe<Scalars['String']>;
    entity_type?: InputMaybe<Scalars['String']>;
    logo_id?: InputMaybe<Scalars['ID']>;
    vv_token?: InputMaybe<Scalars['String']>;
    member_verify_url?: InputMaybe<Scalars['String']>;
    backoffice_login_url?: InputMaybe<Scalars['String']>;
    backoffice_forgot_password_url?: InputMaybe<Scalars['String']>;
    backoffice_support_url?: InputMaybe<Scalars['String']>;
    backoffice_support_email?: InputMaybe<Scalars['EMAIL']>;
};


export type MutationDeleteCompanyArgs = {
    id: Scalars['ID'];
};


export type MutationAddCompanyModuleArgs = {
    company_id: Scalars['ID'];
    module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    is_active?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateCompanyModuleArgs = {
    id: Scalars['ID'];
    is_active: Scalars['Boolean'];
};


export type MutationDeleteCompanyModuleArgs = {
    company_id: Scalars['ID'];
};


export type MutationCreateCompanyModuleIbanProviderArgs = {
    input: InputCompanyModuleIbanProvider;
};


export type MutationUpdateCompanyModuleIbanProviderArgs = {
    id: Scalars['ID'];
    is_active: Scalars['Boolean'];
};


export type MutationDeleteCompanyModuleIbanProviderArgs = {
    id: Scalars['ID'];
};


export type MutationCreateCompanyModulePaymentProviderArgs = {
    input: InputCompanyModulePaymentProvider;
};


export type MutationUpdateCompanyModulePaymentProviderArgs = {
    id: Scalars['ID'];
    is_active: Scalars['Boolean'];
};


export type MutationDeleteCompanyModulePaymentProviderArgs = {
    id: Scalars['ID'];
};


export type MutationCreateDepartmentArgs = {
    name: Scalars['String'];
    company_id: Scalars['ID'];
    department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateDepartmentArgs = {
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCreateDepartmentPositionArgs = {
    name: Scalars['String'];
    company_id: Scalars['ID'];
};


export type MutationDeleteDepartmentArgs = {
    id: Scalars['ID'];
};


export type MutationDeleteDepartmentPositionArgs = {
    id: Scalars['ID'];
};


export type MutationCreateDocumentTypeArgs = {
    name: Scalars['String'];
};


export type MutationDeleteDocumentTypeArgs = {
    id: Scalars['ID'];
};


export type MutationCreateEmailNotificationArgs = {
    group_type_id: Scalars['ID'];
    group_role_id: Scalars['ID'];
    company_id: Scalars['ID'];
    client_id?: InputMaybe<Scalars['Int']>;
    templates: Array<InputMaybe<Scalars['Int']>>;
};


export type MutationUpdateEmailNotificationArgs = {
    id: Scalars['ID'];
    group_type_id: Scalars['ID'];
    group_role_id: Scalars['ID'];
    company_id?: InputMaybe<Scalars['ID']>;
    client_id?: InputMaybe<Scalars['Int']>;
    templates?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type MutationDeleteEmailNotificationArgs = {
    id: Scalars['ID'];
};


export type MutationCreateEmailSmtpArgs = {
    name: Scalars['String'];
    security?: InputMaybe<Securities>;
    host_name: Scalars['String'];
    from_name?: InputMaybe<Scalars['String']>;
    from_email?: InputMaybe<Scalars['String']>;
    username: Scalars['String'];
    password: Scalars['String'];
    replay_to?: InputMaybe<Scalars['String']>;
    port: Scalars['Int'];
    company_id: Scalars['ID'];
    is_sending_mail?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateEmailSmtpArgs = {
    id: Scalars['ID'];
    security?: InputMaybe<Securities>;
    host_name?: InputMaybe<Scalars['String']>;
    from_name?: InputMaybe<Scalars['String']>;
    from_email?: InputMaybe<Scalars['String']>;
    username?: InputMaybe<Scalars['String']>;
    password?: InputMaybe<Scalars['String']>;
    replay_to?: InputMaybe<Scalars['String']>;
    port?: InputMaybe<Scalars['Int']>;
    is_sending_mail?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteEmailSmtpArgs = {
    id: Scalars['ID'];
};


export type MutationSendEmailArgs = {
    security?: InputMaybe<Securities>;
    host_name: Scalars['String'];
    from_name?: InputMaybe<Scalars['String']>;
    from_email?: InputMaybe<Scalars['String']>;
    username: Scalars['String'];
    password: Scalars['String'];
    replay_to?: InputMaybe<Scalars['String']>;
    port: Scalars['Int'];
    email: Scalars['String'];
};


export type MutationCreateEmailTemplateLayoutArgs = {
    header: Scalars['String'];
    footer: Scalars['String'];
    company_id: Scalars['Int'];
};


export type MutationUpdateEmailTemplateLayoutArgs = {
    id: Scalars['ID'];
    header?: InputMaybe<Scalars['String']>;
    footer?: InputMaybe<Scalars['String']>;
    company_id: Scalars['Int'];
};


export type MutationDeleteEmailTemplateLayoutArgs = {
    id: Scalars['ID'];
};


export type MutationCreateEmailTemplateArgs = {
    name: Scalars['String'];
    subject: Scalars['String'];
    use_layout: Scalars['Boolean'];
    type: ClientType;
    service_type: ServiceType;
    content: Scalars['String'];
    header?: InputMaybe<Scalars['String']>;
    footer?: InputMaybe<Scalars['String']>;
    company_id: Scalars['ID'];
};


export type MutationUpdateEmailTemplateArgs = {
    id: Scalars['ID'];
    subject?: InputMaybe<Scalars['String']>;
    use_layout?: InputMaybe<Scalars['Boolean']>;
    type?: InputMaybe<ClientType>;
    service_type?: InputMaybe<ServiceType>;
    content?: InputMaybe<Scalars['String']>;
    header?: InputMaybe<Scalars['String']>;
    footer?: InputMaybe<Scalars['String']>;
    company_id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteEmailTemplateArgs = {
    id: Scalars['ID'];
};


export type MutationSendEmailWithTemplateArgs = {
    email: Scalars['String'];
    company_id: Scalars['ID'];
    subject: Scalars['String'];
    content?: InputMaybe<Scalars['String']>;
    header?: InputMaybe<Scalars['String']>;
    footer?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteFileArgs = {
    id: Scalars['ID'];
};


export type MutationCreateGroupSettingsArgs = {
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    role_id?: InputMaybe<Scalars['ID']>;
    group_type_id: Scalars['ID'];
    providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
    is_active?: InputMaybe<Scalars['Boolean']>;
    company_id?: InputMaybe<Scalars['ID']>;
    module_id?: InputMaybe<Scalars['ID']>;
};


export type MutationUpdateGroupSettingsArgs = {
    id: Scalars['ID'];
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    role_id?: InputMaybe<Scalars['ID']>;
    group_type_id: Scalars['ID'];
    providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
    is_active?: InputMaybe<Scalars['Boolean']>;
    company_id?: InputMaybe<Scalars['ID']>;
    module_id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteGroupArgs = {
    id: Scalars['ID'];
};


export type MutationSetMemberGroupArgs = {
    group_type_id: Scalars['ID'];
    providers?: InputMaybe<Array<InputGroupRoleProvider>>;
    role_id: Scalars['ID'];
};


export type MutationCreateMemberAccessLimitationArgs = {
    input: InputMemberAccessLimitation;
};


export type MutationUpdateMemberAccessLimitationArgs = {
    id: Scalars['ID'];
    input: InputMemberAccessLimitation;
};


export type MutationDeleteMemberAccessLimitationArgs = {
    id: Scalars['ID'];
};


export type MutationUpdateMemberProfileArgs = {
    first_name?: InputMaybe<Scalars['String']>;
    last_name?: InputMaybe<Scalars['String']>;
    country_id?: InputMaybe<Scalars['ID']>;
    language_id?: InputMaybe<Scalars['ID']>;
    email?: InputMaybe<Scalars['EMAIL']>;
};


export type MutationSendConfirmChangeEmailArgs = {
    email: Scalars['String'];
};


export type MutationCreateMemberArgs = {
    first_name: Scalars['String'];
    last_name: Scalars['String'];
    email: Scalars['EMAIL'];
    sex?: InputMaybe<Sex>;
    company_id: Scalars['ID'];
    country_id?: InputMaybe<Scalars['ID']>;
    language_id?: InputMaybe<Scalars['ID']>;
    group_id: Scalars['ID'];
    member_status_id?: InputMaybe<Scalars['ID']>;
    two_factor_auth_setting_id: Scalars['ID'];
    password?: InputMaybe<Scalars['String']>;
    is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
    is_sign_transaction?: InputMaybe<Scalars['Boolean']>;
    send_email?: InputMaybe<Scalars['Boolean']>;
};


export type MutationUpdateMemberArgs = {
    id: Scalars['ID'];
    first_name?: InputMaybe<Scalars['String']>;
    last_name?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['EMAIL']>;
    sex?: InputMaybe<Sex>;
    company_id?: InputMaybe<Scalars['ID']>;
    country_id?: InputMaybe<Scalars['ID']>;
    language_id?: InputMaybe<Scalars['ID']>;
    group_id?: InputMaybe<Scalars['ID']>;
    member_status_id?: InputMaybe<Scalars['ID']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
    department_position_id?: InputMaybe<Scalars['ID']>;
    department_id?: InputMaybe<Scalars['ID']>;
    two_factor_auth_setting_id?: InputMaybe<Scalars['ID']>;
    additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    additional_info_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
    is_sign_transaction?: InputMaybe<Scalars['Boolean']>;
    ip_address?: InputMaybe<Scalars['String']>;
    photo_id?: InputMaybe<Scalars['ID']>;
    job_title?: InputMaybe<Scalars['String']>;
};


export type MutationSetMemberSuspendedArgs = {
    id: Scalars['ID'];
};


export type MutationSetMemberInactiveArgs = {
    id: Scalars['ID'];
};


export type MutationSetMemberActiveArgs = {
    id: Scalars['ID'];
};


export type MutationSetMemberPasswordArgs = {
    id: Scalars['ID'];
    password: Scalars['String'];
    password_confirmation: Scalars['String'];
};


export type MutationSetMemberSecurityPinArgs = {
    id: Scalars['ID'];
};


export type MutationSendMemberEmailVerificationArgs = {
    id: Scalars['ID'];
};


export type MutationResetMemberPasswordArgs = {
    id: Scalars['ID'];
};


export type MutationDeleteMemberArgs = {
    id: Scalars['ID'];
};


export type MutationCreateModuleArgs = {
    name: Scalars['String'];
};


export type MutationCreatePaymentBankArgs = {
    input: InputPaymentBank;
};


export type MutationUpdatePaymentBankArgs = {
    id: Scalars['ID'];
    input: InputPaymentBank;
};


export type MutationDeletePaymentBankArgs = {
    id: Scalars['ID'];
};


export type MutationCreatePaymentProviderArgs = {
    input: InputPaymentProvider;
};


export type MutationUpdatePaymentProviderArgs = {
    id: Scalars['ID'];
    input: InputPaymentProvider;
};


export type MutationDeletePaymentProviderArgs = {
    id: Scalars['ID'];
};


export type MutationCreatePaymentProviderIbanArgs = {
    input: InputPaymentProviderIban;
};


export type MutationUpdatePaymentProviderIbanArgs = {
    id: Scalars['ID'];
    input: InputPaymentProviderIban;
};


export type MutationDeletePaymentProviderIbanArgs = {
    id: Scalars['ID'];
};


export type MutationCreatePaymentSystemArgs = {
    input: InputPaymentSystem;
};


export type MutationUpdatePaymentSystemArgs = {
    id: Scalars['ID'];
    input: InputPaymentSystem;
};


export type MutationDeletePaymentSystemArgs = {
    id: Scalars['ID'];
};


export type MutationCreatePaymentArgs = {
    account_id: Scalars['ID'];
    currency_id: Scalars['ID'];
    price_list_fees_id: Scalars['ID'];
    recipient_account: Scalars['String'];
    recipient_bank_name: Scalars['String'];
    recipient_bank_address: Scalars['String'];
    recipient_bank_swift: Scalars['String'];
    recipient_bank_country_id: Scalars['ID'];
    beneficiary_name: Scalars['String'];
    beneficiary_state: Scalars['String'];
    beneficiary_country_id: Scalars['ID'];
    beneficiary_address: Scalars['String'];
    beneficiary_city: Scalars['String'];
    beneficiary_zip: Scalars['String'];
    beneficiary_additional_data?: InputMaybe<Scalars['JSON']>;
    amount: Scalars['Decimal'];
    amount_real?: InputMaybe<Scalars['Decimal']>;
    fee?: InputMaybe<Scalars['Decimal']>;
    fee_type_id: Scalars['ID'];
    urgency_id: Scalars['ID'];
    operation_type_id: Scalars['ID'];
    payment_provider_id: Scalars['ID'];
    respondent_fees_id: Scalars['ID'];
    company_id: Scalars['ID'];
    execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
};


export type MutationUpdatePaymentArgs = {
    id: Scalars['ID'];
    status_id: Scalars['ID'];
};


export type MutationDeletePaymentArgs = {
    id: Scalars['ID'];
};


export type MutationCreatePriceListFeesArgs = {
    input?: InputMaybe<PriceListFeeInput>;
};


export type MutationUpdatePriceListFeesArgs = {
    id: Scalars['ID'];
    commission_price_list?: InputMaybe<Array<InputMaybe<PriceList>>>;
    input?: InputMaybe<PriceListFeeInput>;
};


export type MutationDeletePriceListFeesArgs = {
    id: Scalars['ID'];
};


export type MutationCreateProjectArgs = {
    input: InputProject;
};


export type MutationUpdateProjectArgs = {
    id: Scalars['ID'];
    input: InputProject;
};


export type MutationDeleteProjectArgs = {
    id: Scalars['ID'];
};


export type MutationUpdateProjectApiSettingArgs = {
    project_id: Scalars['ID'];
    input: Array<InputProjectApiSetting>;
};


export type MutationCreateRegionArgs = {
    input: InputRegion;
};


export type MutationUpdateRegionArgs = {
    id: Scalars['ID'];
    input: InputRegion;
};


export type MutationDeleteRegionArgs = {
    id: Scalars['ID'];
};


export type MutationCreateRoleArgs = {
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    group_type_id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateRoleArgs = {
    id: Scalars['ID'];
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    group_type_id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationDeleteRoleArgs = {
    id: Scalars['ID'];
};


export type MutationCreateTicketCommentArgs = {
    message: Scalars['String'];
    ticket_id: Scalars['ID'];
    client_id: Scalars['ID'];
};


export type MutationCreateTicketArgs = {
    title: Scalars['String'];
    message: Scalars['String'];
    status?: InputMaybe<Scalars['Int']>;
    member_id: Scalars['ID'];
    client_id: Scalars['ID'];
};


export type MutationUpdateTicketArgs = {
    id: Scalars['ID'];
    title?: InputMaybe<Scalars['String']>;
    message?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateTransferOutgoingArgs = {
    company_id: Scalars['ID'];
    group_id: Scalars['ID'];
    group_type_id: Scalars['ID'];
    project_id: Scalars['ID'];
    amount: Scalars['Decimal'];
    currency_id: Scalars['ID'];
    account_id: Scalars['ID'];
    payment_provider_id: Scalars['ID'];
    payment_system_id: Scalars['ID'];
    recipient_bank_country_id: Scalars['ID'];
    requested_by_id: Scalars['ID'];
    price_list_id: Scalars['ID'];
    price_list_fee_id: Scalars['ID'];
    execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
    recipient_account?: InputMaybe<Scalars['String']>;
    recipient_bank_name?: InputMaybe<Scalars['String']>;
    recipient_bank_address?: InputMaybe<Scalars['String']>;
    recipient_bank_swift?: InputMaybe<Scalars['String']>;
    recipient_name?: InputMaybe<Scalars['String']>;
    recipient_city?: InputMaybe<Scalars['String']>;
    recipient_address?: InputMaybe<Scalars['String']>;
    recipient_state?: InputMaybe<Scalars['String']>;
    recipient_zip?: InputMaybe<Scalars['String']>;
    bank_message?: InputMaybe<Scalars['String']>;
    file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateTransferOutgoingArgs = {
    id: Scalars['ID'];
    status_id: Scalars['Int'];
};


export type MutationCreateTransferOutgoingFeeArgs = {
    company_id: Scalars['ID'];
    group_id: Scalars['ID'];
    group_type_id: Scalars['ID'];
    project_id: Scalars['ID'];
    amount: Scalars['Decimal'];
    currency_id: Scalars['ID'];
    account_id: Scalars['ID'];
    operation_type_id: Scalars['ID'];
    payment_provider_id: Scalars['ID'];
    payment_system_id: Scalars['ID'];
    recipient_bank_country_id: Scalars['ID'];
    requested_by_id: Scalars['ID'];
    price_list_id: Scalars['ID'];
    price_list_fee_id: Scalars['ID'];
    execution_at?: InputMaybe<Scalars['DateTimeUtc']>;
    recipient_account?: InputMaybe<Scalars['String']>;
    recipient_bank_name?: InputMaybe<Scalars['String']>;
    recipient_bank_address?: InputMaybe<Scalars['String']>;
    recipient_bank_swift?: InputMaybe<Scalars['String']>;
    recipient_name?: InputMaybe<Scalars['String']>;
    recipient_city?: InputMaybe<Scalars['String']>;
    recipient_address?: InputMaybe<Scalars['String']>;
    recipient_state?: InputMaybe<Scalars['String']>;
    recipient_zip?: InputMaybe<Scalars['String']>;
    bank_message?: InputMaybe<Scalars['String']>;
    file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationUpdateTransferOutgoingFeeArgs = {
    id: Scalars['ID'];
    amount: Scalars['Decimal'];
    reason?: InputMaybe<Scalars['String']>;
    file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};


export type MutationCancelTransferOutgoingFeeArgs = {
    id: Scalars['ID'];
};


export type MutationCreateApplicantArgs = {
    first_name: Scalars['String'];
    last_name: Scalars['String'];
    email: Scalars['EMAIL'];
    phone: Scalars['String'];
    client_type: ApplicantClientType;
    company_name?: InputMaybe<Scalars['String']>;
    url?: InputMaybe<Scalars['String']>;
    password: Scalars['String'];
    password_confirmation: Scalars['String'];
};


export type MutationUpdateApplicantAccountArgs = {
    id: Scalars['ID'];
    is_show: Scalars['Boolean'];
};


export type MutationUpdateApplicantDeviceArgs = {
    id: Scalars['ID'];
    trusted: Scalars['Boolean'];
};


export type MutationUpdateApplicantDeviceWithOtpArgs = {
    code: Scalars['String'];
    auth_token: Scalars['String'];
    id: Scalars['ID'];
    trusted: Scalars['Boolean'];
};


export type MutationDeleteApplicantDeviceArgs = {
    id: Scalars['ID'];
};


export type MutationUpdateApplicantProfileArgs = {
    state?: InputMaybe<Scalars['String']>;
    city?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    zip?: InputMaybe<Scalars['String']>;
    photo_id?: InputMaybe<Scalars['ID']>;
    notify_device_email?: InputMaybe<Scalars['Boolean']>;
};


export type MutationSetApplicantSettingsPasswordArgs = {
    password: Scalars['String'];
    password_confirmation: Scalars['String'];
    current_password: Scalars['String'];
};


export type MutationSetApplicantSettingsPasswordWithOtpArgs = {
    code: Scalars['String'];
    auth_token: Scalars['String'];
    password: Scalars['String'];
    password_confirmation: Scalars['String'];
    current_password: Scalars['String'];
};

export type InputAccount = {
    company_id: Scalars['ID'];
    currency_id: Scalars['ID'];
    owner_id: Scalars['ID'];
    account_number?: InputMaybe<Scalars['String']>;
    payment_provider_id: Scalars['ID'];
    iban_provider_id?: InputMaybe<Scalars['ID']>;
    commission_template_id: Scalars['ID'];
    account_name: Scalars['String'];
    is_primary?: InputMaybe<Scalars['Boolean']>;
    group_role_id: Scalars['ID'];
    group_type_id: Scalars['ID'];
    payment_system_id: Scalars['ID'];
    payment_bank_id?: InputMaybe<Scalars['ID']>;
    clientableAttach?: InputMaybe<PivotTable>;
    min_limit_balance?: InputMaybe<Scalars['Decimal']>;
    max_limit_balance?: InputMaybe<Scalars['Decimal']>;
};

export type PivotTable = {
    sync?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountGenerateIbanResponse = {
    __typename?: 'AccountGenerateIbanResponse';
    status: Scalars['String'];
    message: Scalars['String'];
};

export type ActiveSessionMutatorResponse = {
    __typename?: 'ActiveSessionMutatorResponse';
    status: Scalars['String'];
    message: Scalars['String'];
};

export type AdditionalFieldInput = {
    field_name?: InputMaybe<Scalars['String']>;
    field_value?: InputMaybe<Scalars['StringInteger']>;
    field_type?: InputMaybe<FieldTypes>;
};

export enum FieldTypes {
    Text = 'Text',
    TextArea = 'TextArea',
    CountryList = 'CountryList'
}

export type InputCommissionTemplate = {
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    payment_system_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    business_activity?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    region_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    currency_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    commission_template_limit_id?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
    company_id?: InputMaybe<Scalars['ID']>;
};

export type InputCommissionTemplateLimit = {
    commission_template_limit_type_id: Scalars['ID'];
    commission_template_limit_transfer_direction_id: Scalars['ID'];
    amount: Scalars['Decimal'];
    currency_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_period_id?: InputMaybe<Scalars['ID']>;
    commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']>;
    period_count?: InputMaybe<Scalars['ID']>;
    commission_template_id: Scalars['ID'];
    region_id?: InputMaybe<Scalars['ID']>;
};

export type InputCompanyModuleIbanProvider = {
    company_module_id?: InputMaybe<Scalars['ID']>;
    payment_provider_iban_id?: InputMaybe<Scalars['ID']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
};

export type InputCompanyModulePaymentProvider = {
    company_module_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
};

export type EmailTemplateOnCompanyResponse = {
    __typename?: 'EmailTemplateOnCompanyResponse';
    layout?: Maybe<EmailTemplateLayout>;
    data: Array<EmailTemplate>;
};

export type InputGroupRoleProvider = {
    payment_provider_id: Scalars['ID'];
    commission_template_id: Scalars['ID'];
    is_default?: InputMaybe<Scalars['Boolean']>;
};

export type InputMemberAccessLimitation = {
    member_id: Scalars['ID'];
    groupRoles?: InputMaybe<PivotTable>;
    group_type_id?: InputMaybe<Scalars['ID']>;
    company_id: Scalars['ID'];
    module_id: Scalars['ID'];
    project_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    see_own_applicants?: InputMaybe<Scalars['Boolean']>;
};

export type InputPaymentBank = {
    name: Scalars['String'];
    address: Scalars['String'];
    bank_code?: InputMaybe<Scalars['String']>;
    payment_system_code?: InputMaybe<Scalars['String']>;
    country_id: Scalars['ID'];
    payment_system_id: Scalars['ID'];
    payment_provider_id: Scalars['ID'];
    is_active?: InputMaybe<Scalars['Boolean']>;
};

export type InputPaymentProvider = {
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    logo_id?: InputMaybe<Scalars['ID']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
    company_id: Scalars['ID'];
    payment_systems?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type InputPaymentProviderIban = {
    name: Scalars['String'];
    company_id: Scalars['ID'];
    currency_id: Scalars['ID'];
    is_active: Scalars['Boolean'];
};

export type InputPaymentSystem = {
    name: Scalars['String'];
    is_active?: InputMaybe<Scalars['Boolean']>;
    regions?: InputMaybe<PivotTable>;
    currencies?: InputMaybe<PivotTable>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    banks?: InputMaybe<PivotTable>;
    operations?: InputMaybe<PivotTable>;
    description?: InputMaybe<Scalars['String']>;
    logo_id?: InputMaybe<Scalars['ID']>;
};

export type PriceListFeeInput = {
    name: Scalars['String'];
    type_id: Scalars['ID'];
    operation_type_id: Scalars['ID'];
    period_id?: InputMaybe<Scalars['ID']>;
    price_list_id: Scalars['ID'];
    fee_ranges?: InputMaybe<Scalars['JSON']>;
    fees?: InputMaybe<Array<PriceListFeesList>>;
    scheduled?: InputMaybe<PriceListFeeScheduledInput>;
};

export type PriceListFeesList = {
    currency_id: Scalars['ID'];
    fee: Array<Array<InputMaybe<PriceListFeeItem>>>;
};

export type PriceListFeeItem = {
    mode: Scalars['String'];
    fee?: InputMaybe<Scalars['Int']>;
    amount_from?: InputMaybe<Scalars['Int']>;
    amount_to?: InputMaybe<Scalars['Int']>;
    percent?: InputMaybe<Scalars['Int']>;
};

export type PriceListFeeScheduledInput = {
    starting_date?: InputMaybe<Scalars['DateTimeUtc']>;
    end_date?: InputMaybe<Scalars['DateTimeUtc']>;
    recurrent_interval?: InputMaybe<Scalars['Int']>;
    starting_date_id?: InputMaybe<Scalars['ID']>;
    end_date_id?: InputMaybe<Scalars['ID']>;
};

export type PriceList = {
    payment_system_id?: InputMaybe<Scalars['ID']>;
    commission_template_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
};

export type InputProject = {
    name: Scalars['String'];
    url?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    support_email?: InputMaybe<Scalars['String']>;
    login_url?: InputMaybe<Scalars['String']>;
    sms_sender_name?: InputMaybe<Scalars['String']>;
    client_url?: InputMaybe<Scalars['String']>;
    forgot_password_url?: InputMaybe<Scalars['String']>;
    company_id: Scalars['ID'];
    module_id: Scalars['ID'];
    avatar_id?: InputMaybe<Scalars['ID']>;
    state_id?: InputMaybe<Scalars['ID']>;
    project_settings?: InputMaybe<Array<InputMaybe<InputProjectSettings>>>;
    additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
    additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
};

export type InputProjectSettings = {
    group_type_id?: InputMaybe<Scalars['ID']>;
    group_role_id?: InputMaybe<Scalars['ID']>;
    commission_template_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    iban_provider_id?: InputMaybe<Scalars['ID']>;
    applicant_type: ApplicantType;
};

export type InputProjectApiSetting = {
    wallet: Scalars['String'];
    api_key: Scalars['String'];
    password: Scalars['String'];
    is_active?: InputMaybe<Scalars['Boolean']>;
    provider_id: Scalars['ID'];
    provider_type: ProviderTypeEnum;
};

export enum ProviderTypeEnum {
    PaymentProvider = 'PaymentProvider',
    PaymentProviderIban = 'PaymentProviderIban'
}

export type InputRegion = {
    name: Scalars['String'];
    countries?: InputMaybe<PivotTable>;
    company_id: Scalars['ID'];
};

export enum ApplicantClientType {
    Private = 'Private',
    Corporate = 'Corporate'
}

export type ApplicantSettingsProfile = {
    __typename?: 'ApplicantSettingsProfile';
    id: Scalars['ID'];
    first_name?: Maybe<Scalars['String']>;
    last_name?: Maybe<Scalars['String']>;
    middle_name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['EMAIL']>;
    email_confirm_url?: Maybe<Scalars['String']>;
};

export type TwoFactorAuthToken = {
    __typename?: 'TwoFactorAuthToken';
    two_factor?: Maybe<Scalars['Boolean']>;
    auth_token?: Maybe<Scalars['String']>;
};

export enum DocumentStateEnum {
    Pending = 'Pending',
    Processing = 'Processing',
    Approve = 'Approve',
    Declined = 'Declined'
}

export type DateRange = {
    from: Scalars['Date'];
    to: Scalars['DateEnd'];
};

export type ImageableMorphToTable = {
    connect?: InputMaybe<ConnectImageableInput>;
    disconnect?: InputMaybe<Scalars['Boolean']>;
    delete?: InputMaybe<Scalars['Boolean']>;
};

export type ConnectImageableInput = {
    type: Scalars['String'];
    id: Scalars['ID'];
};

export enum AccountClientsType {
    Individual = 'INDIVIDUAL',
    Company = 'COMPANY'
}

export type QueryClientCondition = {
    id: Scalars['ID'];
};

export type QueryApplicantIndividualModulesFilterStatic = {
    applicant_individual_id?: InputMaybe<Scalars['ID']>;
};

export type Groups = {
    __typename?: 'Groups';
    id: Scalars['ID'];
    name: GroupsEntities;
    /** @deprecated Field no longer supported */
    groups?: Maybe<Array<Maybe<GroupRole>>>;
};

export enum TransferType {
    Incoming = 'INCOMING',
    Outgoing = 'OUTGOING'
}

export enum OperationTypeEnum {
    IncomingWireTransfer = 'INCOMING_WIRE_TRANSFER',
    OutgoingWireTransfer = 'OUTGOING_WIRE_TRANSFER',
    BetweenAccount = 'BETWEEN_ACCOUNT',
    BetweenUsers = 'BETWEEN_USERS',
    Exchange = 'EXCHANGE',
    Debit = 'DEBIT',
    Credit = 'CREDIT',
    ScheduledFees = 'SCHEDULED_FEES'
}

export type PermissionCategoryRole = {
    __typename?: 'PermissionCategoryRole';
    permission_category_id?: Maybe<Scalars['ID']>;
    role_id?: Maybe<Scalars['ID']>;
    is_all_companies?: Maybe<Scalars['Boolean']>;
};

export enum QueryGrantedBankingAccessFilterStaticOperator {
    MemberId = 'member_id',
    GrantAccess = 'grant_access'
}

export enum QueryGrantedBankingAccessFilterStaticType {
    MemberId = 'member_id',
    GrantAccess = 'grant_access'
}

export type QueryGrantedBankingAccessFilterStaticInput = {
    member_id?: InputMaybe<Scalars['ID']>;
    grant_access?: InputMaybe<Scalars['Boolean']>;
};

export enum QueryApplicantBankingAccessesFilterStaticOperator {
    MemberId = 'member_id',
    GrantAccess = 'grant_access'
}

export enum QueryApplicantBankingAccessesFilterStaticType {
    MemberId = 'member_id',
    GrantAccess = 'grant_access'
}

export type QueryApplicantBankingAccessesFilterStaticInput = {
    member_id?: InputMaybe<Scalars['ID']>;
    grant_access?: InputMaybe<Scalars['Boolean']>;
};

export enum QueryGetMatchedUsersFilterStaticOperator {
    ApplicantType = 'applicant_type'
}

export enum QueryGetMatchedUsersFilterStaticType {
    ApplicantType = 'applicant_type'
}

export type QueryGetMatchedUsersFilterStaticInput = {
    applicant_type?: InputMaybe<ApplicantType>;
};

export enum QueryGetMatchedUsersFilterStaticEnumApplicantType {
    ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
    ApplicantCompany = 'APPLICANT_COMPANY'
}

export enum QueryEmailTemplatesFilterStaticOperator {
    HasCompanyFilterByName = 'hasCompanyFilterByName',
    Name = 'name',
    CompanyId = 'company_id',
    Type = 'type',
    ServiceType = 'service_type'
}

export enum QueryEmailTemplatesFilterStaticType {
    HasCompanyFilterByName = 'hasCompanyFilterByName',
    Name = 'name',
    CompanyId = 'company_id',
    Type = 'type',
    ServiceType = 'service_type'
}

export type QueryEmailTemplatesFilterStaticInput = {
    hasCompanyFilterByName?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    company_id?: InputMaybe<Scalars['ID']>;
    type?: InputMaybe<ClientType>;
    service_type?: InputMaybe<ServiceType>;
};

export enum QueryEmailTemplatesFilterStaticEnumClientType {
    Administration = 'ADMINISTRATION',
    Client = 'CLIENT'
}

export enum QueryEmailTemplatesFilterStaticEnumServiceType {
    BankingCommon = 'BANKING_COMMON',
    BankingSystem = 'BANKING_SYSTEM',
    Banking = 'BANKING',
    Common = 'COMMON',
    System = 'SYSTEM',
    AdminNotify = 'ADMIN_NOTIFY'
}

export enum QueryFeeTypesFilterStaticOperator {
    HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

export enum QueryFeeTypesFilterStaticType {
    HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

export type QueryFeeTypesFilterStaticInput = {
    hasOperationTypeFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryGroupTypesFilterStaticOperator {
    HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
    HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
    HasRolesFilterById = 'hasRolesFilterById'
}

export enum QueryGroupTypesFilterStaticType {
    HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
    HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
    HasRolesFilterById = 'hasRolesFilterById'
}

export type QueryGroupTypesFilterStaticInput = {
    hasGroupsFilterByCompanyId?: InputMaybe<Scalars['ID']>;
    hasGroupsFilterByRoleId?: InputMaybe<Scalars['ID']>;
    hasRolesFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryOperationTypesFilterStaticOperator {
    FeeTypeId = 'fee_type_id',
    TransferType = 'transfer_type',
    PaymentSystemId = 'payment_system_id'
}

export enum QueryOperationTypesFilterStaticType {
    FeeTypeId = 'fee_type_id',
    TransferType = 'transfer_type',
    PaymentSystemId = 'payment_system_id'
}

export type QueryOperationTypesFilterStaticInput = {
    fee_type_id?: InputMaybe<Scalars['ID']>;
    transfer_type?: InputMaybe<TransferType>;
    payment_system_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryOperationTypesFilterStaticEnumTransferType {
    Incoming = 'INCOMING',
    Outgoing = 'OUTGOING'
}

export enum QueryPaymentStatusesFilterStaticOperator {
    OperationType = 'operation_type'
}

export enum QueryPaymentStatusesFilterStaticType {
    OperationType = 'operation_type'
}

export type QueryPaymentStatusesFilterStaticInput = {
    operation_type?: InputMaybe<OperationTypeEnum>;
};

export enum QueryPaymentStatusesFilterStaticEnumOperationTypeEnum {
    IncomingTransfer = 'INCOMING_TRANSFER',
    OutgoingTransfer = 'OUTGOING_TRANSFER',
    BetweenAccount = 'BETWEEN_ACCOUNT',
    BetweenUsers = 'BETWEEN_USERS',
    Exchange = 'EXCHANGE',
    Debit = 'DEBIT',
    Credit = 'CREDIT',
    ScheduledFee = 'SCHEDULED_FEE'
}

export enum QueryPriceListFeesFilterStaticOperator {
    Id = 'id',
    PriceListId = 'price_list_id',
    TypeId = 'type_id',
    OperationTypeId = 'operation_type_id',
    PeriodId = 'period_id',
    HasCompanyFilterById = 'hasCompanyFilterById',
    HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
    HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
    HasFeesFilterById = 'hasFeesFilterById'
}

export enum QueryPriceListFeesFilterStaticType {
    Id = 'id',
    PriceListId = 'price_list_id',
    TypeId = 'type_id',
    OperationTypeId = 'operation_type_id',
    PeriodId = 'period_id',
    HasCompanyFilterById = 'hasCompanyFilterById',
    HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
    HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
    HasFeesFilterById = 'hasFeesFilterById'
}

export type QueryPriceListFeesFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    price_list_id?: InputMaybe<Scalars['ID']>;
    type_id?: InputMaybe<Scalars['ID']>;
    operation_type_id?: InputMaybe<Scalars['ID']>;
    period_id?: InputMaybe<Scalars['ID']>;
    hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
    hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
    hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
    hasFeesFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryRequisitesFilterStaticOperator {
    CompanyId = 'company_id',
    PaymentProviderId = 'payment_provider_id',
    PaymentSystemId = 'payment_system_id',
    PaymentBankId = 'payment_bank_id',
    AccountNumber = 'account_number'
}

export enum QueryRequisitesFilterStaticType {
    CompanyId = 'company_id',
    PaymentProviderId = 'payment_provider_id',
    PaymentSystemId = 'payment_system_id',
    PaymentBankId = 'payment_bank_id',
    AccountNumber = 'account_number'
}

export type QueryRequisitesFilterStaticInput = {
    company_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    payment_system_id?: InputMaybe<Scalars['ID']>;
    payment_bank_id?: InputMaybe<Scalars['ID']>;
    account_number?: InputMaybe<Scalars['String']>;
};

export enum QueryApplicantAccountsFilterStaticOperator {
    IsShow = 'is_show'
}

export enum QueryApplicantAccountsFilterStaticType {
    IsShow = 'is_show'
}

export type QueryApplicantAccountsFilterStaticInput = {
    is_show?: InputMaybe<Scalars['Boolean']>;
};

export enum QueryAccountLimitsFilterStaticOperator {
    HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
    HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
    HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
    HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
    HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
    AccountId = 'account_id',
    PeriodCount = 'period_count'
}

export enum QueryAccountLimitsFilterStaticType {
    HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
    HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
    HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
    HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
    HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
    AccountId = 'account_id',
    PeriodCount = 'period_count'
}

export type QueryAccountLimitsFilterStaticInput = {
    hasCurrencyMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasCommissionTemplateLimitTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasCommissionTemplateLimitTransferDirectionMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasCommissionTemplateLimitPeriodMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasCommissionTemplateLimitActionTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    account_id?: InputMaybe<Scalars['ID']>;
    period_count?: InputMaybe<Scalars['ID']>;
};

export enum QueryAccountReachedLimitsFilterStaticOperator {
    AccountId = 'account_id',
    LimitCurrency = 'limit_currency',
    LimitType = 'limit_type',
    LimitValue = 'limit_value',
    TransferDirection = 'transfer_direction',
    Period = 'period',
    Amount = 'amount'
}

export enum QueryAccountReachedLimitsFilterStaticType {
    AccountId = 'account_id',
    LimitCurrency = 'limit_currency',
    LimitType = 'limit_type',
    LimitValue = 'limit_value',
    TransferDirection = 'transfer_direction',
    Period = 'period',
    Amount = 'amount'
}

export type QueryAccountReachedLimitsFilterStaticInput = {
    account_id?: InputMaybe<Scalars['ID']>;
    limit_currency?: InputMaybe<Scalars['String']>;
    limit_type?: InputMaybe<Scalars['String']>;
    limit_value?: InputMaybe<Scalars['String']>;
    transfer_direction?: InputMaybe<Scalars['String']>;
    period?: InputMaybe<Scalars['Int']>;
    amount?: InputMaybe<Scalars['Float']>;
};

export enum QueryAccountListFilterStaticOperator {
    HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
    HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
    HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
    HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
    MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
    CurrencyId = 'currency_id',
    HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
    GroupTypeId = 'group_type_id',
    HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
    IsPrimary = 'is_primary',
    HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
    AccountStateId = 'account_state_id',
    HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname'
}

export enum QueryAccountListFilterStaticType {
    HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
    HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
    HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
    HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
    MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
    CurrencyId = 'currency_id',
    HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
    GroupTypeId = 'group_type_id',
    HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
    IsPrimary = 'is_primary',
    HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
    AccountStateId = 'account_state_id',
    HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname'
}

export type QueryAccountListFilterStaticInput = {
    hasCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasPaymentProviderMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
    MixedAccountNumberOrAccountName?: InputMaybe<Scalars['String']>;
    currency_id?: InputMaybe<Scalars['ID']>;
    hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    group_type_id?: InputMaybe<Scalars['ID']>;
    hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
    is_primary?: InputMaybe<Scalars['Boolean']>;
    hasCommissionTemplateMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
    account_state_id?: InputMaybe<Scalars['ID']>;
    hasClientableMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryApplicantIndividualsFilterStaticOperator {
    Id = 'id',
    Fullname = 'fullname',
    Email = 'email',
    CompanyId = 'company_id',
    ProjectId = 'project_id',
    KycLevelId = 'kyc_level_id',
    HasRiskLevelFilterById = 'hasRiskLevelFilterById',
    HasStateReasonFilterById = 'hasStateReasonFilterById',
    HasStatusFilterById = 'hasStatusFilterById',
    HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
    HasModulesFilterById = 'hasModulesFilterById'
}

export enum QueryApplicantIndividualsFilterStaticType {
    Id = 'id',
    Fullname = 'fullname',
    Email = 'email',
    CompanyId = 'company_id',
    ProjectId = 'project_id',
    KycLevelId = 'kyc_level_id',
    HasRiskLevelFilterById = 'hasRiskLevelFilterById',
    HasStateReasonFilterById = 'hasStateReasonFilterById',
    HasStatusFilterById = 'hasStatusFilterById',
    HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
    HasModulesFilterById = 'hasModulesFilterById'
}

export type QueryApplicantIndividualsFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    fullname?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    company_id?: InputMaybe<Scalars['ID']>;
    project_id?: InputMaybe<Scalars['ID']>;
    kyc_level_id?: InputMaybe<Scalars['ID']>;
    hasRiskLevelFilterById?: InputMaybe<Scalars['ID']>;
    hasStateReasonFilterById?: InputMaybe<Scalars['ID']>;
    hasStatusFilterById?: InputMaybe<Scalars['ID']>;
    hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasModulesFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantCompaniesFilterStaticOperator {
    Id = 'id',
    CompanyId = 'company_id',
    ProjectId = 'project_id',
    AccountManagerMemberId = 'account_manager_member_id',
    HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
    HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
    HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
    HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
    HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
    HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
    HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
    HasStatusFilterById = 'hasStatusFilterById',
    HasModulesFilterById = 'hasModulesFilterById',
    Name = 'name',
    Url = 'url',
    Email = 'email'
}

export enum QueryApplicantCompaniesFilterStaticType {
    Id = 'id',
    CompanyId = 'company_id',
    ProjectId = 'project_id',
    AccountManagerMemberId = 'account_manager_member_id',
    HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
    HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
    HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
    HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
    HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
    HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
    HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
    HasStatusFilterById = 'hasStatusFilterById',
    HasModulesFilterById = 'hasModulesFilterById',
    Name = 'name',
    Url = 'url',
    Email = 'email'
}

export type QueryApplicantCompaniesFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    project_id?: InputMaybe<Scalars['ID']>;
    account_manager_member_id?: InputMaybe<Scalars['ID']>;
    hasStateReasonMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasRiskLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasStatusMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasBusinessTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
    hasKycLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasStatusFilterById?: InputMaybe<Scalars['ID']>;
    hasModulesFilterById?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    url?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
};

export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired {
    ApplicantCompanyId = 'applicant_company_id'
}

export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator {
    ApplicantCompanyId = 'applicant_company_id',
    RiskLevelId = 'risk_level_id'
}

export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticType {
    ApplicantCompanyId = 'applicant_company_id',
    RiskLevelId = 'risk_level_id'
}

export type QueryApplicantCompanyRiskLevelHistoryFilterStaticInput = {
    applicant_company_id: Scalars['ID'];
    risk_level_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantDocumentsFilterStaticOperator {
    Id = 'id',
    ApplicantId = 'applicant_id',
    DocumentTypeId = 'document_type_id',
    DocumentStateId = 'document_state_id'
}

export enum QueryApplicantDocumentsFilterStaticType {
    Id = 'id',
    ApplicantId = 'applicant_id',
    DocumentTypeId = 'document_type_id',
    DocumentStateId = 'document_state_id'
}

export type QueryApplicantDocumentsFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    applicant_id?: InputMaybe<Scalars['ID']>;
    document_type_id?: InputMaybe<Scalars['ID']>;
    document_state_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantDocumentTagsFilterStaticOperator {
    Name = 'name',
    HasCategoryFilterByName = 'hasCategoryFilterByName'
}

export enum QueryApplicantDocumentTagsFilterStaticType {
    Name = 'name',
    HasCategoryFilterByName = 'hasCategoryFilterByName'
}

export type QueryApplicantDocumentTagsFilterStaticInput = {
    name?: InputMaybe<Scalars['String']>;
    hasCategoryFilterByName?: InputMaybe<Scalars['String']>;
};

export enum QueryApplicantIndividualCompanyPositionsFilterStaticOperator {
    Name = 'name',
    CompanyId = 'company_id'
}

export enum QueryApplicantIndividualCompanyPositionsFilterStaticType {
    Name = 'name',
    CompanyId = 'company_id'
}

export type QueryApplicantIndividualCompanyPositionsFilterStaticInput = {
    name?: InputMaybe<Scalars['String']>;
    company_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryApplicantIndividualCompanyRelationsFilterStaticOperator {
    Name = 'name',
    CompanyId = 'company_id'
}

export enum QueryApplicantIndividualCompanyRelationsFilterStaticType {
    Name = 'name',
    CompanyId = 'company_id'
}

export type QueryApplicantIndividualCompanyRelationsFilterStaticInput = {
    name?: InputMaybe<Scalars['String']>;
    company_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryBankCorrespondentsFilterStaticOperator {
    Name = 'name',
    HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
    HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId'
}

export enum QueryBankCorrespondentsFilterStaticType {
    Name = 'name',
    HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
    HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId'
}

export type QueryBankCorrespondentsFilterStaticInput = {
    name?: InputMaybe<Scalars['String']>;
    hasBankCorrespondentCurrenciesFilterByCurrencyId?: InputMaybe<Scalars['ID']>;
    hasBankCorrespondentRegionsFilterByRegionId?: InputMaybe<Scalars['ID']>;
};

export enum QueryBusinessActivitiesFilterStaticOperator {
    Id = 'id',
    Name = 'name',
    HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById'
}

export enum QueryBusinessActivitiesFilterStaticType {
    Id = 'id',
    Name = 'name',
    HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById'
}

export type QueryBusinessActivitiesFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryCommissionPriceListsFilterStaticOperator {
    HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
    HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
    HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
    Id = 'id',
    CompanyId = 'company_id',
    RegionId = 'region_id'
}

export enum QueryCommissionPriceListsFilterStaticType {
    HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
    HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
    HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
    Id = 'id',
    CompanyId = 'company_id',
    RegionId = 'region_id'
}

export type QueryCommissionPriceListsFilterStaticInput = {
    hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
    hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
    hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
    id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    region_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryCommissionTemplatesFilterStaticOperator {
    Id = 'id',
    Name = 'name',
    IsActive = 'is_active',
    HasCompanyFilterById = 'hasCompanyFilterById',
    HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
    HasBusinessActivityFilterById = 'hasBusinessActivityFilterById'
}

export enum QueryCommissionTemplatesFilterStaticType {
    Id = 'id',
    Name = 'name',
    IsActive = 'is_active',
    HasCompanyFilterById = 'hasCompanyFilterById',
    HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
    HasBusinessActivityFilterById = 'hasBusinessActivityFilterById'
}

export type QueryCommissionTemplatesFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
    hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
    hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']>;
    hasBusinessActivityFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryCompaniesFilterStaticOperator {
    Name = 'name',
    Email = 'email',
    Url = 'url',
    RegNumber = 'reg_number',
    EntityType = 'entity_type',
    CountryId = 'country_id',
    HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
    HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
    HasRegionsFilterById = 'hasRegionsFilterById'
}

export enum QueryCompaniesFilterStaticType {
    Name = 'name',
    Email = 'email',
    Url = 'url',
    RegNumber = 'reg_number',
    EntityType = 'entity_type',
    CountryId = 'country_id',
    HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
    HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
    HasRegionsFilterById = 'hasRegionsFilterById'
}

export type QueryCompaniesFilterStaticInput = {
    name?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    url?: InputMaybe<Scalars['String']>;
    reg_number?: InputMaybe<Scalars['String']>;
    entity_type?: InputMaybe<Scalars['String']>;
    country_id?: InputMaybe<Scalars['ID']>;
    hasPaymentProvidersFilterById?: InputMaybe<Scalars['ID']>;
    hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']>;
    hasRegionsFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryDepartmentsFilterStaticOperator {
    HasCompanyFilterById = 'hasCompanyFilterById',
    Name = 'name'
}

export enum QueryDepartmentsFilterStaticType {
    HasCompanyFilterById = 'hasCompanyFilterById',
    Name = 'name'
}

export type QueryDepartmentsFilterStaticInput = {
    hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
};

export enum QueryDepartmentPositionsFilterStaticOperator {
    HasDepartmentFilterById = 'hasDepartmentFilterById',
    Name = 'name',
    IsActive = 'is_active'
}

export enum QueryDepartmentPositionsFilterStaticType {
    HasDepartmentFilterById = 'hasDepartmentFilterById',
    Name = 'name',
    IsActive = 'is_active'
}

export type QueryDepartmentPositionsFilterStaticInput = {
    hasDepartmentFilterById?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
};

export enum QueryEmailNotificationsFilterStaticOperator {
    CompanyId = 'company_id',
    Type = 'type',
    RecipientType = 'recipient_type',
    HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
    HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
    HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
    HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
    HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
    HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject'
}

export enum QueryEmailNotificationsFilterStaticType {
    CompanyId = 'company_id',
    Type = 'type',
    RecipientType = 'recipient_type',
    HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
    HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
    HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
    HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
    HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
    HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject'
}

export type QueryEmailNotificationsFilterStaticInput = {
    company_id?: InputMaybe<Scalars['ID']>;
    type?: InputMaybe<NotifyType>;
    recipient_type?: InputMaybe<RecipientType>;
    hasApplicantIndividualMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
    hasApplicantCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']>;
    hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasTemplatesFilterBySubject?: InputMaybe<Scalars['String']>;
};

export enum QueryEmailNotificationsFilterStaticEnumNotifyType {
    Administration = 'ADMINISTRATION',
    Client = 'CLIENT'
}

export enum QueryEmailNotificationsFilterStaticEnumRecipientType {
    Person = 'PERSON',
    Group = 'GROUP'
}

export enum QueryFilesFilterStaticOperator {
    AuthorId = 'author_id',
    EntityType = 'entity_type'
}

export enum QueryFilesFilterStaticType {
    AuthorId = 'author_id',
    EntityType = 'entity_type'
}

export type QueryFilesFilterStaticInput = {
    author_id?: InputMaybe<Scalars['ID']>;
    entity_type?: InputMaybe<Scalars['String']>;
};

export enum QueryGroupsFilterStaticOperator {
    Id = 'id',
    CompanyId = 'company_id',
    RoleId = 'role_id',
    Name = 'name',
    GroupTypeId = 'group_type_id',
    IsActive = 'is_active'
}

export enum QueryGroupsFilterStaticType {
    Id = 'id',
    CompanyId = 'company_id',
    RoleId = 'role_id',
    Name = 'name',
    GroupTypeId = 'group_type_id',
    IsActive = 'is_active'
}

export type QueryGroupsFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    role_id?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    group_type_id?: InputMaybe<Scalars['ID']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
};

export enum QueryGroupListFilterStaticOperator {
    Id = 'id',
    CompanyId = 'company_id',
    Name = 'name',
    RoleId = 'role_id',
    GroupTypeId = 'group_type_id',
    IsActive = 'is_active',
    ModuleId = 'module_id',
    CommissionTemplateId = 'commission_template_id',
    PaymentProviderId = 'payment_provider_id'
}

export enum QueryGroupListFilterStaticType {
    Id = 'id',
    CompanyId = 'company_id',
    Name = 'name',
    RoleId = 'role_id',
    GroupTypeId = 'group_type_id',
    IsActive = 'is_active',
    ModuleId = 'module_id',
    CommissionTemplateId = 'commission_template_id',
    PaymentProviderId = 'payment_provider_id'
}

export type QueryGroupListFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    role_id?: InputMaybe<Scalars['ID']>;
    group_type_id?: InputMaybe<Scalars['ID']>;
    is_active?: InputMaybe<Scalars['Boolean']>;
    module_id?: InputMaybe<Scalars['ID']>;
    commission_template_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryMemberAccessLimitationsFilterStaticOperator {
    DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
    HasGroupRolesFilterById = 'hasGroupRolesFilterById',
    ModuleId = 'module_id',
    ProjectId = 'project_id',
    PaymentProviderId = 'payment_provider_id',
    GroupTypeId = 'group_type_id'
}

export enum QueryMemberAccessLimitationsFilterStaticType {
    DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
    HasGroupRolesFilterById = 'hasGroupRolesFilterById',
    ModuleId = 'module_id',
    ProjectId = 'project_id',
    PaymentProviderId = 'payment_provider_id',
    GroupTypeId = 'group_type_id'
}

export type QueryMemberAccessLimitationsFilterStaticInput = {
    doesntHaveGroupRoles?: InputMaybe<Scalars['Boolean']>;
    hasGroupRolesFilterById?: InputMaybe<Scalars['ID']>;
    module_id?: InputMaybe<Scalars['ID']>;
    project_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    group_type_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryMembersFilterStaticOperator {
    HasGroupRoleFilterById = 'hasGroupRoleFilterById',
    HasRoleFilterById = 'hasRoleFilterById',
    Id = 'id',
    Fullname = 'fullname',
    CompanyId = 'company_id',
    Email = 'email',
    DepartmentPositionId = 'department_position_id',
    DepartmentId = 'department_id',
    LastLoginAt = 'last_login_at',
    IsShowOwnerApplicants = 'is_show_owner_applicants',
    MemberStatusId = 'member_status_id'
}

export enum QueryMembersFilterStaticType {
    HasGroupRoleFilterById = 'hasGroupRoleFilterById',
    HasRoleFilterById = 'hasRoleFilterById',
    Id = 'id',
    Fullname = 'fullname',
    CompanyId = 'company_id',
    Email = 'email',
    DepartmentPositionId = 'department_position_id',
    DepartmentId = 'department_id',
    LastLoginAt = 'last_login_at',
    IsShowOwnerApplicants = 'is_show_owner_applicants',
    MemberStatusId = 'member_status_id'
}

export type QueryMembersFilterStaticInput = {
    hasGroupRoleFilterById?: InputMaybe<Scalars['ID']>;
    hasRoleFilterById?: InputMaybe<Scalars['ID']>;
    id?: InputMaybe<Scalars['ID']>;
    fullname?: InputMaybe<Scalars['String']>;
    company_id?: InputMaybe<Scalars['ID']>;
    email?: InputMaybe<Scalars['String']>;
    department_position_id?: InputMaybe<Scalars['ID']>;
    department_id?: InputMaybe<Scalars['ID']>;
    last_login_at?: InputMaybe<Scalars['String']>;
    is_show_owner_applicants?: InputMaybe<Scalars['Boolean']>;
    member_status_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryPaymentBanksFilterStaticOperator {
    Id = 'id',
    CountryId = 'country_id',
    PaymentSystemId = 'payment_system_id',
    PaymentProviderId = 'payment_provider_id',
    Name = 'name',
    Address = 'address',
    BankCode = 'bank_code',
    PaymentSystemCode = 'payment_system_code'
}

export enum QueryPaymentBanksFilterStaticType {
    Id = 'id',
    CountryId = 'country_id',
    PaymentSystemId = 'payment_system_id',
    PaymentProviderId = 'payment_provider_id',
    Name = 'name',
    Address = 'address',
    BankCode = 'bank_code',
    PaymentSystemCode = 'payment_system_code'
}

export type QueryPaymentBanksFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    country_id?: InputMaybe<Scalars['ID']>;
    payment_system_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    name?: InputMaybe<Scalars['String']>;
    address?: InputMaybe<Scalars['String']>;
    bank_code?: InputMaybe<Scalars['String']>;
    payment_system_code?: InputMaybe<Scalars['String']>;
};

export enum QueryPaymentProvidersFilterStaticOperator {
    Name = 'name',
    HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
    HasAccountFilterById = 'hasAccountFilterById',
    HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
    CompanyId = 'company_id',
    Id = 'id'
}

export enum QueryPaymentProvidersFilterStaticType {
    Name = 'name',
    HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
    HasAccountFilterById = 'hasAccountFilterById',
    HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
    CompanyId = 'company_id',
    Id = 'id'
}

export type QueryPaymentProvidersFilterStaticInput = {
    name?: InputMaybe<Scalars['String']>;
    hasPaymentSystemsFilterById?: InputMaybe<Scalars['ID']>;
    hasAccountFilterById?: InputMaybe<Scalars['ID']>;
    hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    id?: InputMaybe<Scalars['ID']>;
};

export enum QueryPaymentProviderIbansFilterStaticOperator {
    Name = 'name',
    CompanyId = 'company_id',
    CurrencyId = 'currency_id'
}

export enum QueryPaymentProviderIbansFilterStaticType {
    Name = 'name',
    CompanyId = 'company_id',
    CurrencyId = 'currency_id'
}

export type QueryPaymentProviderIbansFilterStaticInput = {
    name?: InputMaybe<Scalars['String']>;
    company_id?: InputMaybe<Scalars['ID']>;
    currency_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryPaymentSystemsFilterStaticOperator {
    Id = 'id',
    Name = 'name',
    HasProvidersFilterByName = 'hasProvidersFilterByName',
    HasProvidersFilterById = 'hasProvidersFilterById',
    HasCompaniesFilterById = 'hasCompaniesFilterById',
    HasRegionsFilterById = 'hasRegionsFilterById'
}

export enum QueryPaymentSystemsFilterStaticType {
    Id = 'id',
    Name = 'name',
    HasProvidersFilterByName = 'hasProvidersFilterByName',
    HasProvidersFilterById = 'hasProvidersFilterById',
    HasCompaniesFilterById = 'hasCompaniesFilterById',
    HasRegionsFilterById = 'hasRegionsFilterById'
}

export type QueryPaymentSystemsFilterStaticInput = {
    id?: InputMaybe<Scalars['Mixed']>;
    name?: InputMaybe<Scalars['Mixed']>;
    hasProvidersFilterByName?: InputMaybe<Scalars['String']>;
    hasProvidersFilterById?: InputMaybe<Scalars['ID']>;
    hasCompaniesFilterById?: InputMaybe<Scalars['ID']>;
    hasRegionsFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryPaymentsFilterStaticOperator {
    Id = 'id',
    CompanyId = 'company_id',
    PaymentProviderId = 'payment_provider_id',
    OperationTypeId = 'operation_type_id',
    UrgencyId = 'urgency_id',
    StatusId = 'status_id',
    SenderName = 'sender_name',
    HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber'
}

export enum QueryPaymentsFilterStaticType {
    Id = 'id',
    CompanyId = 'company_id',
    PaymentProviderId = 'payment_provider_id',
    OperationTypeId = 'operation_type_id',
    UrgencyId = 'urgency_id',
    StatusId = 'status_id',
    SenderName = 'sender_name',
    HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber'
}

export type QueryPaymentsFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    payment_provider_id?: InputMaybe<Scalars['ID']>;
    operation_type_id?: InputMaybe<Scalars['ID']>;
    urgency_id?: InputMaybe<Scalars['ID']>;
    status_id?: InputMaybe<Scalars['ID']>;
    sender_name?: InputMaybe<Scalars['String']>;
    hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
};

export enum QueryProjectsFilterStaticOperator {
    Id = 'id',
    CompanyId = 'company_id',
    ModuleId = 'module_id'
}

export enum QueryProjectsFilterStaticType {
    Id = 'id',
    CompanyId = 'company_id',
    ModuleId = 'module_id'
}

export type QueryProjectsFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    company_id?: InputMaybe<Scalars['ID']>;
    module_id?: InputMaybe<Scalars['ID']>;
};

export enum QueryRegionsFilterStaticOperator {
    CompanyId = 'company_id',
    HasCountriesFilterById = 'hasCountriesFilterById',
    HasCountriesFilterByName = 'hasCountriesFilterByName',
    HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

export enum QueryRegionsFilterStaticType {
    CompanyId = 'company_id',
    HasCountriesFilterById = 'hasCountriesFilterById',
    HasCountriesFilterByName = 'hasCountriesFilterByName',
    HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

export type QueryRegionsFilterStaticInput = {
    company_id?: InputMaybe<Scalars['ID']>;
    hasCountriesFilterById?: InputMaybe<Scalars['ID']>;
    hasCountriesFilterByName?: InputMaybe<Scalars['String']>;
    hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryRolesFilterStaticOperator {
    Name = 'name',
    CompanyId = 'company_id',
    HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
    HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName'
}

export enum QueryRolesFilterStaticType {
    Name = 'name',
    CompanyId = 'company_id',
    HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
    HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName'
}

export type QueryRolesFilterStaticInput = {
    name?: InputMaybe<Scalars['String']>;
    company_id?: InputMaybe<Scalars['ID']>;
    hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
    hasGroupsMixedIdOrName?: InputMaybe<Scalars['Mixed']>;
};

export enum QueryTicketsFilterStaticOperator {
    Id = 'id',
    MemberId = 'member_id',
    ClientId = 'client_id',
    HasCompanyFilterById = 'hasCompanyFilterById'
}

export enum QueryTicketsFilterStaticType {
    Id = 'id',
    MemberId = 'member_id',
    ClientId = 'client_id',
    HasCompanyFilterById = 'hasCompanyFilterById'
}

export type QueryTicketsFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    member_id?: InputMaybe<Scalars['ID']>;
    client_id?: InputMaybe<Scalars['ID']>;
    hasCompanyFilterById?: InputMaybe<Scalars['ID']>;
};

export enum QueryTransferIncomingsFilterStaticOperator {
    Id = 'id',
    UrgencyId = 'urgency_id',
    OperationTypeId = 'operation_type_id',
    SenderName = 'sender_name',
    StatusId = 'status_id',
    HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
    HasFeeFilterByFee = 'hasFeeFilterByFee',
    HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount'
}

export enum QueryTransferIncomingsFilterStaticType {
    Id = 'id',
    UrgencyId = 'urgency_id',
    OperationTypeId = 'operation_type_id',
    SenderName = 'sender_name',
    StatusId = 'status_id',
    HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
    HasFeeFilterByFee = 'hasFeeFilterByFee',
    HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount'
}

export type QueryTransferIncomingsFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    urgency_id?: InputMaybe<Scalars['ID']>;
    operation_type_id?: InputMaybe<Scalars['ID']>;
    sender_name?: InputMaybe<Scalars['String']>;
    status_id?: InputMaybe<Scalars['ID']>;
    hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
    hasFeeFilterByFee?: InputMaybe<Scalars['String']>;
    hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']>;
};

export enum QueryTransferOutgoingsFilterStaticOperator {
    Id = 'id',
    UrgencyId = 'urgency_id',
    OperationTypeId = 'operation_type_id',
    StatusId = 'status_id',
    RecipientName = 'recipient_name',
    UserType = 'user_type',
    HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
    HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
    HasFeeFilterByFee = 'hasFeeFilterByFee',
    HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount'
}

export enum QueryTransferOutgoingsFilterStaticType {
    Id = 'id',
    UrgencyId = 'urgency_id',
    OperationTypeId = 'operation_type_id',
    StatusId = 'status_id',
    RecipientName = 'recipient_name',
    UserType = 'user_type',
    HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
    HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
    HasFeeFilterByFee = 'hasFeeFilterByFee',
    HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount'
}

export type QueryTransferOutgoingsFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    urgency_id?: InputMaybe<Scalars['ID']>;
    operation_type_id?: InputMaybe<Scalars['ID']>;
    status_id?: InputMaybe<Scalars['ID']>;
    recipient_name?: InputMaybe<Scalars['String']>;
    user_type?: InputMaybe<UserType>;
    hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']>;
    hasSenderMixedNameOrFullname?: InputMaybe<Scalars['Mixed']>;
    hasFeeFilterByFee?: InputMaybe<Scalars['String']>;
    hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']>;
};

export enum QueryTransferOutgoingsFilterStaticEnumUserType {
    ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
    ApplicantCompany = 'APPLICANT_COMPANY',
    Members = 'MEMBERS'
}

export enum QueryUsersFilterStaticOperator {
    Id = 'id',
    Fullname = 'fullname',
    CompanyId = 'company_id',
    Email = 'email',
    GroupId = 'group_id',
    GroupTypeId = 'group_type_id',
    RoleId = 'role_id'
}

export enum QueryUsersFilterStaticType {
    Id = 'id',
    Fullname = 'fullname',
    CompanyId = 'company_id',
    Email = 'email',
    GroupId = 'group_id',
    GroupTypeId = 'group_type_id',
    RoleId = 'role_id'
}

export type QueryUsersFilterStaticInput = {
    id?: InputMaybe<Scalars['ID']>;
    fullname?: InputMaybe<Scalars['String']>;
    company_id?: InputMaybe<Scalars['ID']>;
    email?: InputMaybe<Scalars['String']>;
    group_id?: InputMaybe<Scalars['ID']>;
    group_type_id?: InputMaybe<Scalars['ID']>;
    role_id?: InputMaybe<Scalars['ID']>;
};

export type SimplePaginatorInfo = {
    __typename?: 'SimplePaginatorInfo';
    count: Scalars['Int'];
    currentPage: Scalars['Int'];
    firstItem?: Maybe<Scalars['Int']>;
    lastItem?: Maybe<Scalars['Int']>;
    perPage: Scalars['Int'];
    hasMorePages: Scalars['Boolean'];
};

export type PageInfo = {
    __typename?: 'PageInfo';
    hasNextPage: Scalars['Boolean'];
    hasPreviousPage: Scalars['Boolean'];
    startCursor?: Maybe<Scalars['String']>;
    endCursor?: Maybe<Scalars['String']>;
    total: Scalars['Int'];
    count: Scalars['Int'];
    currentPage: Scalars['Int'];
    lastPage: Scalars['Int'];
};

export type WhereConditions = {
    column?: InputMaybe<Scalars['String']>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<WhereConditions>>;
    OR?: InputMaybe<Array<WhereConditions>>;
    HAS?: InputMaybe<WhereConditionsRelation>;
};

export type WhereConditionsRelation = {
    relation: Scalars['String'];
    operator?: InputMaybe<SqlOperator>;
    amount?: InputMaybe<Scalars['Int']>;
    condition?: InputMaybe<WhereConditions>;
};

export type FilterConditions = {
    column?: InputMaybe<Scalars['String']>;
    operator?: InputMaybe<SqlOperator>;
    value?: InputMaybe<Scalars['Mixed']>;
    AND?: InputMaybe<Array<FilterConditions>>;
    OR?: InputMaybe<Array<FilterConditions>>;
};

export enum OrderByRelationWithColumnAggregateFunction {
    Avg = 'AVG',
    Min = 'MIN',
    Max = 'MAX',
    Sum = 'SUM',
    Count = 'COUNT'
}

export type OrderByClause = {
    column: Scalars['String'];
    order: SortOrder;
};

export type PermissionType = {
    __typename?: 'PermissionType';
    PERMISSION_TICKETS?: Maybe<Permission_Tickets>;
    PERMISSION_DASHBOARD?: Maybe<Permission_Dashboard>;
    PERMISSION_MY_NET_WORTH?: Maybe<Permission_My_Net_Worth>;
    PERMISSION_ACCOUNT_DETAILS?: Maybe<Permission_Account_Details>;
    PERMISSION_MAKE_PAYMENTS?: Maybe<Permission_Make_Payments>;
    PERMISSION_REQUISITES?: Maybe<Permission_Requisites>;
    PERMISSION_MY_TEMPLATES?: Maybe<Permission_My_Templates>;
    PERMISSION_STATEMENTS?: Maybe<Permission_Statements>;
    PERMISSION_PAYMENT_LIST?: Maybe<Permission_Payment_List>;
    PERMISSION_PAYMENT_DETAILS?: Maybe<Permission_Payment_Details>;
    PERMISSION_SETTINGS_CONTACT_DETAILS?: Maybe<Permission_Settings_Contact_Details>;
    PERMISSION_SETTINGS_LOG_IN_DETAILS?: Maybe<Permission_Settings_Log_In_Details>;
    PERMISSION_SETTINGS_SECURITY_LEVEL?: Maybe<Permission_Settings_Security_Level>;
    PERMISSION_SETTINGS_ACCOUNT?: Maybe<Permission_Settings_Account>;
};
