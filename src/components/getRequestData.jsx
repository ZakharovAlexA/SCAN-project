function getRequestData(data) {
    return {
        issueDateInterval: {
            startDate: data.StartDate,
            endDate: data.EndDate,
        },
        searchContext: {
            targetSearchEntitiesContext: {
                targetSearchEntities: [
                    {
                        type: 'company',
                        sparkId: null,
                        entityId: null,
                        inn: data.inn,
                        maxFullness: data.maxFullness,
                        inBusinessNews: data.inBusinessNews,
                    },
                ],
                onlyMainRole: data.mainRoleInNews,
                tonality: data.tonality,
                onlyWithRiskFactors: data.onlyWithRiskFactors,
                riskFactors: {
                    and: [],
                    or: [],
                    not: [],
                },
                themes: {
                    and: [],
                    or: [],
                    not: [],
                },
            },
            themesFilter: {
                and: [],
                or: [],
                not: [],
            },
        },
        searchArea: {
            includedSources: [],
            excludedSources: [],
            includedSourceGroups: [],
            excludedSourceGroups: [],
        },
        attributeFilters: {
            excludeTechNews: true,
            excludeAnnouncements: true,
            excludeDigests: true,
        },
        similarMode: 'duplicates',
        limit: data.limit,
        sortType: 'issueDate',
        sortDirectionType: 'asc',
        intervalType: 'month',
        histogramTypes: ['totalDocuments', 'riskFactors'],
    };
}
export default getRequestData;
