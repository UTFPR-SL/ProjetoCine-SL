module.exports = function respPadrao(response) {
  if (expect(response.statusCode).toBe(200)) return false;
  if (
    expect(JSON.stringify(response.headers)).toContain(
      '"access-control-allow-headers":"Origin, X-Requested-With, Content-Type, Accept"'
    )
  )
    return false;

  return true;
};

module.expports = function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
