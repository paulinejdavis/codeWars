package aLee;

import java.util.HashMap;

public class Parsing {

    protected static final HashMap <String, String> getStatus(final boolean isBusy) {
        HashMap<String, String> status = new HashMap<>();
      
        if (isBusy) {
          status.put("status", "busy");
        } else {
          status.put("status", "available");
        }
        
        return status;
    }
  
}