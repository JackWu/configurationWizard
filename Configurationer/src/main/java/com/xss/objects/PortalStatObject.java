package com.xss.objects;

/**
 * Created by h13640 on 1/19/2016.
 */
public class PortalStatObject {
    private String viewName;
    private String status;
    private String statusDescription;

    public PortalStatObject(String viewName, String status, String statusDescription) {
        this.viewName = viewName;
        this.status = status;
        this.statusDescription = statusDescription;
    }

    public String getViewName() {
        return viewName;
    }

    public void setViewName(String viewName) {
        this.viewName = viewName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getStatusDescription() {
        return statusDescription;
    }

    public void setStatusDescription(String statusDescription) {
        this.statusDescription = statusDescription;
    }
}
