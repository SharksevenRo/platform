Meteor.methods({
  "getChartData": function (data) {

    var newSearch = new ElasticRest(
      data.index,
      data.type,
      data.limit,
      data.query,
      data.fields
    );

    return newSearch.doSearch();
  }
});