import com.fasterxml.jackson.annotation.JsonProperty;

public class Country {

  static final String STRING_FORMAT = "Country [name=%s, population=%d, imageLink=%s]";

  @JsonProperty("name") private String name;
  @JsonProperty("population") private int population;
  @JsonProperty("imageLink") private String imageLink;

  public Country(@JsonProperty("name") String name, @JsonProperty("population") int population, @JsonProperty("imageLink") String imageLink){
    this.name = name;
    this.population = population;
    this.imageLink = imageLink;
  }

  /* Getters */
  public String getName(){return name;}

  public int getPopulation(){return population;}

  public String getImageLink(){return imageLink;}

  @Override
  public String toString() {
    return String.format(STRING_FORMAT, name, population, imageLink);
  }

  public int compareTo(Country obj){
    return this.name.compareTo(obj.name);
  }
}
