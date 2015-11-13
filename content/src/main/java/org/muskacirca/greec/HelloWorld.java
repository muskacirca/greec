package org.muskacirca.greec;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ejb.Stateless;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/")
@Stateless
public class HelloWorld {

    private final static Logger LOG = LoggerFactory.getLogger(HelloWorld.class);

    public HelloWorld() {
    }

    @GET
    @Path("helloworld")
    @Produces(MediaType.TEXT_PLAIN)
    public String helloWorld() {
        LOG.debug("HelloWorld");
        return "HelloWorld";
    }

}
