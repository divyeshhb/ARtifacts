class Artifact {
  final String name;
  final String id;
  final String shortDesc;
  final String longDesc;
  final List imageUrls;
  final double basePrice;

  Artifact({
    this.id,
    this.name,
    this.basePrice,
    this.imageUrls,
    this.longDesc,
    this.shortDesc,
  });
}
